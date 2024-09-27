import scrapy
import re
from urllib.parse import urlparse, urljoin
from twisted.internet.error import DNSLookupError, TimeoutError, TCPTimedOutError
from scrapy.spidermiddlewares.httperror import HttpError

class SubdirectorySpider(scrapy.Spider):
    name = "myspider"
    start_urls = ['https://vikaspedia.in/social-welfare/differently-abled-welfare/schemes-programmes/accessible-elections', 
                  'https://thebetterindia.com/347158/general-elections-2024-voting-rights-for-persons-with-disabilities-in-india-theme-accessible-elections/',
                  'https://www.eci.gov.in/persons-with-disabilities/',
                  'https://www.thehindubusinessline.com/news/elections/884-lakh-people-with-disabilities-registered-in-the-electoral-roll-election-commission/article67957921.ece',
                  'https://www.deccanherald.com/india/ecs-efforts-towards-inclusion-2958803',
                  'https://www.indiatoday.in/india/story/election-commission-date-announcement-parliament-lok-sabha-assembly-elections-voters-arrangements-2515697-2024-03-16',
                  'https://enabled.in/wp/election-2019-facilities-and-guidelines-for-persons-with-disabilities/',
                  
                  ]

    custom_settings = {
        'DOWNLOAD_DELAY': 1,
        'DEPTH_LIMIT': 4,
        'RETRY_TIMES': 1,
        'FEED_FORMAT': 'json',
        'FEED_URI': 'valid_urls.json',
        'DUPEFILTER_CLASS': 'scrapy.dupefilters.BaseDupeFilter',
    }

    # Base URL part to check before following links
    allowed_base_url = "https://vikaspedia.in/social-welfare/differently-abled-welfare"

    def __init__(self, *args, **kwargs):
        super(SubdirectorySpider, self).__init__(*args, **kwargs)
        self.domain = urlparse(self.start_urls[0]).netloc
        self.visited_urls = set()

    def parse(self, response):
        # Only process the response if it's from a valid URL
        if self.allowed_base_url in response.url:
            links = response.css('a::attr(href)').getall()

            # Yield URLs that match the criteria
            if self.should_yield_url(response.url):
                yield {
                    'url': response.url,
                    'status': response.status
                }

            # Follow valid links
            for link in links:
                full_url = urljoin(response.url, link)
                parsed_url = urlparse(full_url)

                # Check if the link contains the allowed_base_url part
                if self.allowed_base_url in full_url and parsed_url.scheme in ('http', 'https'):
                    if full_url not in self.visited_urls:
                        self.visited_urls.add(full_url)

                        if self.should_follow_url(parsed_url.path):
                            yield scrapy.Request(full_url, callback=self.parse, errback=self.handle_error)
        else:
            self.logger.info(f"Skipping URL that doesn't match the base: {response.url}")

    def should_yield_url(self, url):
        parsed_url = urlparse(url)
        return parsed_url
    

    def should_follow_url(self, path):
        # Don't follow image, doc, or binary file URLs
        return not re.search(r'\.(jpg|jpeg|png|gif|pdf|doc|docx|xls|xlsx|zip|rar)$', path, re.IGNORECASE)

    def handle_error(self, failure):
        if failure.check(HttpError):
            response = failure.value.response
            self.logger.error(f"HTTP error {response.status} for {response.url}")
        elif failure.check(DNSLookupError):
            self.logger.error(f"DNS lookup failed for {failure.request.url}")
        elif failure.check(TimeoutError, TCPTimedOutError):
            self.logger.error(f"Timeout error for {failure.request.url}")
        else:
            self.logger.error(f"Other error occurred for {failure.request.url}: {failure.value}")

    def closed(self, reason):
        self.logger.info(f"Spider closed: {reason}")
        self.logger.info(f"Total valid URLs found: {self.crawler.stats.get_value('item_scraped_count')}")
