import { Datatable, Navbar, Sidebar } from "@/components/dashboard";
import { useUsuarios } from "@/hooks/useUsuarios";

const List = () => {

  const { usuarios, isLoading } = useUsuarios('/auth');
  console.log("l=", isLoading, "u=", usuarios)

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContain">
        <Navbar/>
        <Datatable usuarios={usuarios}/>
      </div>
    </div>
  )
}

export default List