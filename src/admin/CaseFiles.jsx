import React from 'react'

const CaseDoc = ({caseImg,caseTitle,caseDes,modcaseTitle,modcaseDes}) =>{
    return(
      <div className="card col-4 m-2" style={{width: "18rem"}}>
        <img src={caseImg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{caseTitle}</h5>
          <p className="card-text">{caseDes}</p>
          <a href="#"><div>
        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
         Learn More
          </button>
  <div className="modal fade modal-dialog-scrollable modal-fullscreen-sm-down" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{modcaseTitle}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        {modcaseDes}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Download</button>
        </div>
      </div>
    </div>
  </div>
        </div></a>
    </div>
  </div>
    )
  }


const CaseFiles = () => {
  return (
    <div>
        <div>
        <CaseDoc  caseTitle={'firstcase'} caseDes={'physical assault'} modcaseTitle={''} modcaseDes={'blahblah'} />
        <CaseDoc  caseTitle={''} caseDes={''} modcaseTitle={''} modcaseDes={''} />
        <CaseDoc  caseTitle={''} caseDes={''} modcaseTitle={''} modcaseDes={''} />
        <CaseDoc  caseTitle={''} caseDes={''} modcaseTitle={''} modcaseDes={''} />
        </div>
    </div>
  )
}

export default CaseFiles