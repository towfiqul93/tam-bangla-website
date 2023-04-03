export const UpcomingTournaments = () =>{
    return (
        <div>
        <div className="ticket_slider float_left">
            <div className="container">
                <div className="next_match_wrapper float_left upcoming-margin">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                            <div className="next_match_count float_left">
                                <h2>Upcoming Tournaments</h2>
                                <div id="clockdiv">
                                    <div><span className="days"></span>
                                        <div className="smalltext">Days</div>
                                    </div>
                                    <div><span className="hours"></span>
                                        <div className="smalltext">Hours</div>
                                    </div>
                                    <div><span className="minutes"></span>
                                        <div className="smalltext">Minutes</div>
                                    </div>
                                    <div><span className="seconds"></span>
                                        <div className="smalltext">Seconds</div>
                                    </div>
                                </div>
                                <div className="next_match_venue float_left">
                                    <p>Mon, May 20, Tam Bangla Premier League</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="upcoming_matches_wrapper float_left">
                                <div className="row">
                                    <img src="./src/images/badminton/TBPL_Text.jpg" alt="logo" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        
    )
}