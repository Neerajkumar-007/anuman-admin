import Layout from "../layout/Layout";
import FirstRow from "./FirstRow";

export default function Dashboard() {
  return (
    <Layout>
       <div id="layout-wrapper" className="bg-dash admin-table">
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
            <div className="row">
      <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <div>
            <span className="small_text">Dashboard</span>
            <h4 className="mb-sm-0 font-size-28">Dashboard </h4>
          </div>
          <div className="page-title-right">
          </div>
        </div>
      </div>
    </div>
    <FirstRow />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
