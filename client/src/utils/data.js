import avatar from '../assets/avatar.avif'
import avatar1 from '../assets/avatar1.avif'
import avatar2 from '../assets/avatar2.avif'
import avatar3 from '../assets/avatar3.avif'
import avatar4 from '../assets/avatar4.avif'
import avatar5 from '../assets/avatar5.avif'
import avatar6 from '../assets/avatar6.avif'

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    aadhar: "123456789012",
    otp: "123456",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "0987654321",
    aadhar: "234567890123",
    otp: "654321",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "1122334455",
    aadhar: "345678901234",
    otp: "112233",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    phone: "5566778899",
    aadhar: "456789012345",
    otp: "445566",
  },
];

const activeUser = {
  name: "Vikas Mourya",
  email: "vikasisagoodboy@gmail.com",
  phone: "1234512345",
  aadhar: "456789012345",
}

const people = [
  {
    name: "John Doe",
    profilePicture: avatar,
    party: "Liberal Party",
    constituencyAssembly: "District 1"
  },
  {
    name: "Jane Smith",
    profilePicture: avatar2,
    party: "Conservative Party",
    constituencyAssembly: "District 2"
  },

  {
    name: "Emily Davis",
    profilePicture: avatar4,
    party: "Social Democratic Party",
    constituencyAssembly: "District 4"
  },
  {
    name: "Robert Brown",
    profilePicture: avatar5,
    party: "Labor Party",
    constituencyAssembly: "District 5"
  },
  {
    name: "Jessica Wilson",
    profilePicture: avatar6,
    party: "National Party",
    constituencyAssembly: "District 6"
  },
  {
    name: "David Miller",
    profilePicture: avatar1,
    party: "Independent",
    constituencyAssembly: "District 7"
  }
];

export { users, activeUser, people };
