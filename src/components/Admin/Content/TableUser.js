const TableUser = (props) => {

    const { listUsers } = props;
    // 


    return (
        <>
            <table className="table table-dark table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-users-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button
                                            onClick={() => props.handleClickBtnView(item)}
                                            className="btn btn-primary">View</button>
                                        <button
                                            onClick={() => props.handleClickBtnUpdate(item)}
                                            className="btn btn-warning mx-3"
                                        >Update</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td className="text-center" colSpan={4}>
                                Not found data
                            </td>
                        </tr>}
                </tbody>
            </table>
        </>
    )
}

export default TableUser;