import PostCreate from "../Blogs/PostCreate"
import MainTable from '../MainContent1/MainTable'

export default function Articles(){
    return<>
     <table className="table table-bordered table-hover">
            {children}
        </table>

    </>
     
}