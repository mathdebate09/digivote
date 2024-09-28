import React, {useCallback, useState, useEffect} from 'react';

import { useNavigate } from "react-router-dom";
import {
  AdvancedMarker,
  AdvancedMarkerAnchorPoint,
  APIProvider,
  InfoWindow,
  Map,
  Pin,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import ChatBot from '../ChatBot';
import { FaChevronCircleLeft } from "react-icons/fa";
import { BiBraille } from "react-icons/bi";
import { MdHearing } from "react-icons/md";
import { MdOutlineInterpreterMode } from "react-icons/md";

const fetchLocations = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/locations'); // Update with your API URL
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.map((location,index) => ({
      id: index,
      name: location.name,
      address: location.address,
      braille: location.braille,
      hearingAid: location.hearingAid,
      interpreter: location.interpreter,
      position: { lat: location.latitude, lng: location.longitude },
      type: 'pin' // or 'html' if needed
    }));
  } catch (error) {
    console.error('Error fetching locations:', error);
    return [];
  }
};

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY ;

export const AdvancedMarkerWithRef = (props) => {
  const {children, onMarkerClick, ...advancedMarkerProps} = props;
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <AdvancedMarker
      onClick={() => {
        if (marker) {
          onMarkerClick(marker);
        }
      }}
      ref={markerRef}
      {...advancedMarkerProps}>
      {children}
    </AdvancedMarker>
  );
};


function BoothMap() {
  const [data, setData] = useState([])
  const [markers, setMarkers] = useState(data);
  const Z_INDEX_SELECTED = data.length;
  const Z_INDEX_HOVER = data.length + 1;
  const [hoverId, setHoverId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const [anchorPoint, setAnchorPoint] = useState('BOTTOM');
  const [selectedMarker, setSelectedMarker] =
    useState(null);
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  useEffect(()=> {
    async function fetchData(){
      const data = await fetchLocations()
      const sorted = data.sort((a, b) => b.position.lat - a.position.lat)
      .map((dataItem, index) => ({...dataItem, zIndex: index}));
      setData(sorted)
      setMarkers(sorted.filter((_, index) => (index + 1) % 10 === 0).splice(0,100))
      console.log(sorted)
    }
    fetchData()
  },[])

  const onMouseEnter = useCallback((id) => setHoverId(id), []);
  const onMouseLeave = useCallback(() => setHoverId(null), []);
  const onMarkerClick = useCallback(
    (id, marker) => {
      setSelectedId(id);

      if (marker) {
        setSelectedMarker(marker);
      }

      if (id !== selectedId) {
        setInfoWindowShown(true);
      } else {
        setInfoWindowShown(isShown => !isShown);
      }
    },
    [selectedId]
  );

  const onMapClick = useCallback(() => {
    setSelectedId(null);
    setSelectedMarker(null);
    setInfoWindowShown(false);
  }, []);

  const handleInfowindowCloseClick = useCallback(
    () => setInfoWindowShown(false),
    []
  );

  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      <FaChevronCircleLeft
        className="fixed text-4xl top-8 left-8 z-50 cursor-pointer"
        onClick={() => navigate(-1)}
      />
    <APIProvider apiKey={API_KEY} libraries={['marker']}>

      <Map
       className='w-screen h-screen overflow-hidden p-0 m-0'
        mapId={'bf51a910020fa25a'}
        defaultZoom={12}
        defaultCenter={{lat: 19.0390, lng: 72.8619}}
        gestureHandling={'greedy'}
        onClick={onMapClick}
        clickableIcons={false}
        disableDefaultUI>
        {markers.map(({id, zIndex: zIndexDefault, position, type}) => {
          let zIndex = zIndexDefault;

          if (hoverId === id) {
            zIndex = Z_INDEX_HOVER;
          }

          if (selectedId === id) {
            zIndex = Z_INDEX_SELECTED;
          }
          if(!position || !position.lat || !position.lng){
            console.error("marked not valied")
            return null;
          }

          if (type === 'pin') {
            return (
              <AdvancedMarkerWithRef
                onMarkerClick={(
                  marker
                ) => onMarkerClick(id, marker)}
                onMouseEnter={() => onMouseEnter(id)}
                onMouseLeave={onMouseLeave}
                key={id}
                zIndex={zIndex}
                className="custom-marker"
                style={{
                  transform: `scale(${[hoverId, selectedId].includes(id) ? 1.4 : 1})`
                }}
                position={position}>
                <Pin
                  background={selectedId === id ? '#22ccff' : null}
                  borderColor={selectedId === id ? '#1e89a1' : null}
                  glyphColor={selectedId === id ? '#0f677a' : null}
                />
              </AdvancedMarkerWithRef>
            );
          }

          if (type === 'html') {
            return (
              <React.Fragment key={id}>
                <AdvancedMarkerWithRef
                  position={position}
                  zIndex={zIndex}
                  anchorPoint={AdvancedMarkerAnchorPoint[anchorPoint]}
                  className="custom-marker"
                  style={{
                    transform: `scale(${[hoverId, selectedId].includes(id) ? 1.4 : 1})`
                  }}
                  onMarkerClick={(
                    marker
                  ) => onMarkerClick(id, marker)}
                  onMouseEnter={() => onMouseEnter(id)}
                  onMouseLeave={onMouseLeave}>
                  <div
                    className={`custom-html-content ${selectedId === id ? 'selected' : ''}`}></div>
                </AdvancedMarkerWithRef>

                {/* anchor point visualization marker */}
                <AdvancedMarkerWithRef
                  onMarkerClick={(
                    marker
                  ) => onMarkerClick(id, marker)}
                  zIndex={zIndex}
                  onMouseEnter={() => onMouseEnter(id)}
                  onMouseLeave={onMouseLeave}
                  anchorPoint={AdvancedMarkerAnchorPoint.CENTER}
                  position={position}>
                  <div className="visualization-marker"></div>
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
          }
        })}

        {infoWindowShown && selectedMarker && (
          <InfoWindow
            anchor={selectedMarker}
            onCloseClick={handleInfowindowCloseClick}>
            {
              markers.map(marker => {
                if(marker.id === selectedId){
                  return (
                    <div className="mx-auto">
                      <h1 className='text-2xl font-bold'>Polling Booth</h1>
                      <h3 className='text-lg font-semibold'>Name: {marker.name}</h3>
                      <p className='text-md'>Address: {marker.address}</p>
                      <br/>
                      <ul className="flex text-3xl gap-4 mx-auto">
                        <li className='text-md'>{marker.braille && <BiBraille/>}</li>
                        <li className='text-md'>{marker.hearingAid && <MdHearing />}</li>
                        <li className='text-md'>{marker.interpreter && <MdOutlineInterpreterMode />}</li>
                      </ul>
                    </div>
                  )
                }
              })
            }
          </InfoWindow>
        )}
      </Map>
      <ChatBot />
    </APIProvider>
    </div>
  );
}

export default BoothMap;
