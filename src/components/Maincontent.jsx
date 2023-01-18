import MainTable from "./MainContent1/MainTable";
import ContentWrapper from "./MainContent1/ContentWrapper";
import ContentTitle from "./MainContent1/ContentTitle";
import TableTitle from "./Categories/CategoryList";
import ContentBody from './MainContent1/ContentBody'
import CategoryList from "./Categories/CategoryList";

export default function MainContent ({handleShow}){

    ;

      const ContentBodyItems =[
        { label: "2" },
        { label: "Dulguun" },
        { label: "sing out" },
        { label: "---" },
      ]

    return(
        <>
        <ContentWrapper>
            <ContentTitle title={'Blog spot'} button={'create'} handleShow={handleShow}/>
            <MainTable>
                <CategoryList />
                <ContentBody items={ContentBodyItems} />
            </MainTable>
      </ContentWrapper>
      </>
    )
}