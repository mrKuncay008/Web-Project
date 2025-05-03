import ava from '../../../../public/image/pren.jpg'
import ava2 from '../../../../public/image/ryan.jpg'
import ava3 from '../../../../public/image/sally.png'

const columns = [
    {name: "NAME", uid: "name"},
    {name: "ROLE", uid: "role"},
    {name: "STATUS", uid: "status"},
  ];
  
  const users = [
    {
      id: 2,
      name: "Ryan Dominic",
      role: "Technical Lead",
      team: "Management",
      status: "Active",
      age: "25",
      avatar: (ava2),
      email: "411221050@mahasiswa.undira.ac.id",
    },
    {
      id: 1,
      name: "Muhammad Frendi",
      role: "Devloper",
      team: "Devlopment",
      status: "Active",
      age: "29",
      avatar: (ava),
      email: "411221049@mahasiswa.undira.ac.id",
    },
    {
        id: 3,
        name: "Sally Amarissa",
        role: "Developer",
        team: "Development",
        status: "Active",
        age: "22",
        avatar: (ava3),
        email: "411221189@mahasiswa.undira.ac.id",
      },
  ];
  
  export {columns, users};