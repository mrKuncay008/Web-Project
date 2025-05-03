import { Link, Head } from '@inertiajs/react';

import React from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip} from "@nextui-org/react";
   
import {columns, users} from "./Anggota";
import Nav from './Navbar';
// import Nav from '../Navbar';

function Landingpage ({ title, myNavbar }) {
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            className="font-semibold "
            size="md"
            avatarProps={{radius: "lg", src: user.avatar}}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="font-bold flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color="success" size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      default:
        return cellValue;
    }
  }, []);
  
    return (
        <>
        <Nav 
          canLogin={myNavbar.canLogin}
          canRegister={myNavbar.canRegister}
        />
        <Head title={title} />
        <div  className="table__Landing container p-5 m-5">
        <Table>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn  key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={users} >
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
    </div>
  </>
    )
}
export default Landingpage