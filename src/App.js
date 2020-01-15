import React from 'react';
import './App.css';
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
function App() {
    return (
        <div className="wrapper">
            <Navbar/>
            <Sidebar/>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Dashboard</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard v1</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>150</h3>

                                        <p>New Orders</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i
                                        className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">

                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>53</h3>

                                        <p>Bounce Rate</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i
                                        className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">

                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>44</h3>

                                        <p>User Registrations</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-person-add"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i
                                        className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>65</h3>

                                        <p>Unique Visitors</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-pie-graph"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i
                                        className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <section className="col-lg-5 connectedSortable">

                                <div className="card bg-gradient-primary">
                                    <div className="card-header border-0">
                                        <h3 className="card-title">
                                            <i className="fas fa-map-marker-alt mr-1"></i>
                                            Visitors
                                        </h3>

                                    </div>


                                </div>

                                <div className="card bg-gradient-warning">
                                    <div className="card-header border-0">
                                        <h3 className="card-title">
                                            <i className="fas fa-map-marker-alt mr-1"></i>
                                            dedy </h3>

                                    </div>


                                </div>


                            </section>

                        </div>
                    </div>
                </section>
            </div>
            <Footer/>

        </div>

    );
}

export default App;
