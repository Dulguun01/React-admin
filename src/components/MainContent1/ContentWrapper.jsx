export default function ContentWrapper ({children}){
    return(<>
        <div className="container body-container">
            {children}
        </div>
        </>
    )
}