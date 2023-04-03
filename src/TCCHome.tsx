import "./custom.css";
import { useNavigate } from 'react-router-dom';

export function TCCHome() {
    const navigate = useNavigate()
    function navigateHome (){
        return navigate('/')
    }
    function navigateLogin (){
        return navigate('/login')
    }
    return (
    <div>
        <div className="ft_navi_main_wrapper float_left">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <div className="ft_logo_wrapper">
                            <a onClick={navigateHome}>
                                <img src="./src/images/badminton/logo_new.png" alt="logo" />
                            </a>
                            <div className="menu_main_wrapper ">
                                <div className="menu_toggle rotate" id="menu_toggle_icon">
                                    <i className="flaticon-arrow-down-sign-to-navigate"></i>
                                </div>
                                <div id="menu_open" className="menu_dropdown">
                                    <ul className="menu_wrapper menu_wrapper_2">
                                        <li><a href="index_badminton.html" title="">Home</a></li>
                                        <li><a href="about_us.html" title="">Tam Bangla</a></li>
                                        <li className="common_dropdown_wrapper float_left">
										    <a href="#" title="">Tournaments<i className="fa fa-angle-right"></i></a>
											    <ul>
												    <li><a href="gallery_3column.html">TBPL</a></li>
												    <li><a href="gallery_4column.html">TCC</a></li>
												    <li><a href="gallery_fullwidth.html">Asia Cup</a></li>
												    <li><a href="gallery_masonry.html">Tampere Indoor</a></li>							
											    </ul>
									    </li>
                                    </ul>   
                                </div>
                            </div>
                        </div>
                        <div className="ft_right_wrapper">
                            <ul>
                            <li>
                                <div className="hs_btn_wrapper d-block d-sm-block d-md-block d-lg-block d-xl-block">
                                    <ul>
                                        <li><a href="" onClick={navigateLogin}>Login</a></li>
                                    </ul>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </div>     
                </div>      
            </div>    
        </div>
        <div className="slider_wrapper">
            <div id="rev_slider_1050_1_wrapper" className="rev_slider_wrapper fullscreen-container custom6" data-alias="webproduct-light" data-source="gallery">
                <div id="rev_slider_1050_1" className="rev_slider fullscreenbanner custom8" data-version="5.4.1">
                    <ul>
                        <li data-index="rs-2938" data-transition="slidevertical" data-slotamount="1" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="1500" data-thumb="" data-rotate="0" data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off" data-title="Intro" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                            <img src="./src/images/badminton/tampere1.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                            <div className="tp-caption   tp-resizeme sec_off_img hidden-xs custom1" id="slide-2938-layer-2" data-x="['left','left','center','center']" data-hoffset="['728','420','570','60']" data-y="['top','top','top','bottom']" data-voffset="['70','70','580','63']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames='[{"from":"z:0;rX:0deg;rY:0;rZ:0;sX:1.5;sY:1.5;skX:0;skY:0;opacity:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2350,"ease":"Power3.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]' data-textAlign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
                            </div>
                            <div className="tp-caption WebProduct-Title   tp-resizeme sec_off_heading_background custom2" id="slide-2938-layer-3" data-x="['left','left','center','center']" data-hoffset="['30','30','30','30']" data-y="['middle','middle','top','top']" data-voffset="['-80','-80','300','270']" data-fontsize="['50','50','40','30']" data-lineheight="['75','75','75','60']" data-width="100%" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1000,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]' data-textAlign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"><span>Tampere Champions Cup</span> <br /> is here
                            </div>
                            <div className="tp-caption WebProduct-Content   tp-resizeme custom3" id="slide-2938-layer-4" data-x="['left','left','center','center']" data-hoffset="['30','30','30','30']" data-y="['middle','middle','top','top']" data-voffset="['30','30','460','400']" data-fontsize="['18','18','18','18']" data-lineheight="['24','24','24','22']" data-width="['448','356','334','277']" data-height="['none','none','76','68']" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1500,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]' data-textAlign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">Tam Bangla Society Welcomes you to our community.
                            <br/> </div>
                            <div className="tp-caption rev-btn rev-btn resp_btn_imp custom4" id="slide-2938-layer-5" data-x="['left','left','center','center']" data-hoffset="['30','30','30','30']" data-y="['middle','middle','top','top']" data-voffset="['120','150','550','530']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-actions='[{"event":"click","action":"jumptoslide","slide":"rs-2939","delay":""}]' data-responsive_offset="on" data-responsive="off" data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1750,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:#ffffff;border:1px solid rgba(255, 255, 255, 0.5);bg:transparent;bw:2px 2px 2px 2px;"}]' data-textAlign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[25,25,25,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[25,25,25,25]">Join Now </div>
                            <div className="tp-caption tp-shape tp-shapewrapper custom5" id="slide-67-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames='[{"delay":10,"speed":500,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":500,"frame":"999","to":"opacity:0;","ease":"Power4.easeOut"}]' data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"> </div>
                        </li>
                        <li data-index="rs-2939" data-transition="slidevertical" data-slotamount="1" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="1500" data-thumb="" data-rotate="0" data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off" data-title="Intro" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                            <img src="./src/images/badminton/tampere2.jpeg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                            <div className="tp-caption   tp-resizeme sec_off_img hidden-xs custom1" id="slide-2938-layer-2" data-x="['left','left','center','center']" data-hoffset="['728','420','570','60']" data-y="['top','top','top','bottom']" data-voffset="['70','70','580','63']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames='[{"from":"z:0;rX:0deg;rY:0;rZ:0;sX:1.5;sY:1.5;skX:0;skY:0;opacity:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2350,"ease":"Power3.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]' data-textAlign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
                            </div>
                            <div className="tp-caption WebProduct-Title   tp-resizeme sec_off_heading_background custom2" id="slide-2938-layer-3" data-x="['left','left','center','center']" data-hoffset="['30','30','30','30']" data-y="['middle','middle','top','top']" data-voffset="['-80','-80','300','270']" data-fontsize="['50','50','40','30']" data-lineheight="['75','75','75','60']" data-width="100%" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1000,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]' data-textAlign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"><span>Tam-Bangla Premier League</span> <br /> In Summer
                            </div>
                            <div className="tp-caption WebProduct-Content   tp-resizeme custom3" id="slide-2938-layer-4" data-x="['left','left','center','center']" data-hoffset="['30','30','30','30']" data-y="['middle','middle','top','top']" data-voffset="['30','30','460','400']" data-fontsize="['18','18','18','18']" data-lineheight="['24','24','24','22']" data-width="['448','356','334','277']" data-height="['none','none','76','68']" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1500,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]' data-textAlign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">Tam Bangla Society Welcomes you to our community.
                            </div>
                            <div className="tp-caption rev-btn rev-btn resp_btn_imp custom4" id="slide-2938-layer-5" data-x="['left','left','center','center']" data-hoffset="['30','30','30','30']" data-y="['middle','middle','top','top']" data-voffset="['120','150','550','530']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-actions='[{"event":"click","action":"jumptoslide","slide":"rs-2939","delay":""}]' data-responsive_offset="on" data-responsive="off" data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1750,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:#ffffff;border:1px solid rgba(255, 255, 255, 0.5);bg:transparent;bw:2px 2px 2px 2px;"}]' data-textAlign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[25,25,25,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[25,25,25,25]">Join Now </div>
                            <div className="tp-caption tp-shape tp-shapewrapper custom5" id="slide-67-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames='[{"delay":10,"speed":500,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":500,"frame":"999","to":"opacity:0;","ease":"Power4.easeOut"}]' data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"> </div>
                        </li>
                        <li data-index="rs-2940" data-transition="slidevertical" data-slotamount="1" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="1500" data-thumb="" data-rotate="0" data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off" data-title="Intro" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                            <img src="./src/images/badminton/tampere3.jpeg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                            <div className="tp-caption   tp-resizeme sec_off_img hidden-xs custom1" id="slide-2938-layer-2" data-x="['left','left','center','center']" data-hoffset="['728','420','570','60']" data-y="['top','top','top','bottom']" data-voffset="['70','70','580','63']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames='[{"from":"z:0;rX:0deg;rY:0;rZ:0;sX:1.5;sY:1.5;skX:0;skY:0;opacity:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2350,"ease":"Power3.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]' data-textAlign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
                            </div>
                            <div className="tp-caption WebProduct-Title   tp-resizeme sec_off_heading_background custom2" id="slide-2938-layer-3" data-x="['left','left','center','center']" data-hoffset="['30','30','30','30']" data-y="['middle','middle','top','top']" data-voffset="['-80','-80','300','270']" data-fontsize="['50','50','40','30']" data-lineheight="['75','75','75','60']" data-width="100%" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1000,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]' data-textAlign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"><span>Tampere Indoor Cricket</span> <br />
                            </div>
                            <div className="tp-caption WebProduct-Content   tp-resizeme custom3" id="slide-2938-layer-4" data-x="['left','left','center','center']" data-hoffset="['30','30','30','30']" data-y="['middle','middle','top','top']" data-voffset="['30','30','460','400']" data-fontsize="['18','18','18','18']" data-lineheight="['24','24','24','22']" data-width="['448','356','334','277']" data-height="['none','none','76','68']" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1500,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]' data-textAlign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">Tam Bangla Society Welcomes you to our community.
                            </div>
                            <div className="tp-caption rev-btn rev-btn resp_btn_imp custom4" id="slide-2938-layer-5" data-x="['left','left','center','center']" data-hoffset="['30','30','30','30']" data-y="['middle','middle','top','top']" data-voffset="['120','150','550','530']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-actions='[{"event":"click","action":"jumptoslide","slide":"rs-2939","delay":""}]' data-responsive_offset="on" data-responsive="off" data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1750,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:#ffffff;border:1px solid rgba(255, 255, 255, 0.5);bg:transparent;bw:2px 2px 2px 2px;"}]' data-textAlign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[25,25,25,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[25,25,25,25]">Join Now </div>
                            <div className="tp-caption tp-shape tp-shapewrapper custom5" id="slide-67-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames='[{"delay":10,"speed":500,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":500,"frame":"999","to":"opacity:0;","ease":"Power4.easeOut"}]' data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"> </div>
                        </li>
                    </ul>
                    <div className="tp-bannertimer tp-bottom custom7"></div>
                </div>
            </div>
            <div className="text_effect">
                <h4><span>T</span>
                <span>A</span>
                <span>M</span>
                <span>P</span>
                <span>E</span>
                <span>R</span>
                <span>E</span>
                </h4>
                </div>
        </div>
        <div className="ticket_slider float_left">
            <div className="container">
                <div className="next_match_wrapper float_left">
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
        <div className="ticket_slider float_left">
            <div className="container">
                <div className="next_match_wrapper2 float_left">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                            <div className="next_match_count float_left">
                                <div id="clockdiv1">
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
                                    <p>Mon, June 10, Tampere Champions Cup</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="upcoming_matches_wrapper float_left">
                                <div className="row">
                                    <img src="./src/images/badminton/TCC_Logo_Text.jpg" alt="logo" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="dreams-area">
        <div className="dream_overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-12 col-xs-12 col-sm-12">
                    <div className="dreams-title">
                        <img src="./src/images/badminton/logo_new.png" alt="image" />
                        <h2>
                       WELCOME TO TAMPERE </h2>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-xs-12 col-sm-12">
                    <div className="hs_btn_wrapper float_left dream_btn">
                        <ul>
                            <li><a href="#">join us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="portfolio_grid float_left">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ft_left_heading_wraper head1">
                            <h1>Previous Years Tournament Photos</h1>
                        </div>
                    </div>
                </div>
                <div className="row portfoli_inner">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 website ux_ui">
                    <div className="portfolio_item">
                        <img src="./src/images/badminton/finbangla21.jpg" alt="" />
                        <div className="portfolio_hover">
                            <a href="#">  fin bangla 21</a>
                            <div className="zoom_popup">
                                <a className="img-link" href="./src/images/badminton/finbangla21.jpg"> <i className="flaticon-magnifier"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 website design">
                    <div className="portfolio_item">
                        <img src="./src/images/badminton/tbpl2022.jpg" alt="" />
                        <div className="portfolio_hover">
                            <a href="#">  TBPL 2022</a>
                            <div className="zoom_popup">
                                <a className="img-link" href="./src/images/badminton/tbpl2022.jpg"> <i className="flaticon-magnifier"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 design ux_ui">
                    <div className="portfolio_item">
                        <img src="./src/images/badminton/tbpl2022_new.jpg" alt="" />
                        <div className="portfolio_hover">
                            <a href="#">  TBPL 2022</a>
                            <div className="zoom_popup">
                                <a className="img-link" href="./src/images/badminton/tbpl2022_new.jpg"> <i className="flaticon-magnifier"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 website">
                    <div className="portfolio_item">
                        <img src="./src/images/badminton/tbpl2020.jpg" alt="" />
                        <div className="portfolio_hover">
                            <a href="#">  TBPL 2020</a>
                            <div className="zoom_popup">
                                <a className="img-link" href="./src/images/badminton/tbpl2020.jpg"> <i className="flaticon-magnifier"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 website design ux_ui">
                    <div className="portfolio_item">
                        <img src="./src/images/badminton/tbpl2021.jpg" alt="" />
                        <div className="portfolio_hover">
                            <a href="#">  TBPL 2021</a>
                            <div className="zoom_popup">
                                <a className="img-link" href="./src/images/badminton/tbpl2021.jpg"> <i className="flaticon-magnifier"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 dribbble design website">
                    <div className="portfolio_item">
                        <img src="./src/images/badminton/tbpl2018.jpg" alt="" />
                        <div className="portfolio_hover">
                            <a href="#">  TBPL 2018</a>
                            <div className="zoom_popup">
                                <a className="img-link" href="./src/images/badminton/tbpl2018.jpg"> <i className="flaticon-magnifier"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 website design ux_ui">
                    <div className="portfolio_item">
                        <img src="./src/images/badminton/tbpl2019.jpg" alt="" />
                        <div className="portfolio_hover">
                            <a href="#">  TBPL 2019</a>
                            <div className="zoom_popup">
                                <a className="img-link" href="./src/images/badminton/tbpl2019.jpg"> <i className="flaticon-magnifier"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12  ux_ui">
                    <div className="portfolio_item">
                        <img src="./src/images/badminton/tbpl2020_new.jpg" alt="" />
                        <div className="portfolio_hover">
                            <a href="#">  TBPL 2020</a>
                            <div className="zoom_popup">
                                <a className="img-link" href="./src/images/badminton/tbpl2020_new.jpg"> <i className="flaticon-magnifier"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12  ux_ui">
                    <div className="portfolio_item">
                        <img src="./src/images/badminton/TBPL_2022_FUAD.jpg" alt="" />
                        <div className="portfolio_hover">
                            <a href="#">  TBPL 2022</a>
                            <div className="zoom_popup">
                                <a className="img-link" href="./src/images/badminton/TBPL_2022_FUAD.jpg"> <i className="flaticon-magnifier"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="latest_news_wraper float_left">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ft_left_heading_wraper">
                            <h1>latest News</h1>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="ne_recent_left_side_wrapper float_left">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="ne_re_left_bottom_main_wrapper aa">
                                        <div className="ne_re_bottom_img">
                                            <img src="./src/images/badminton/news1.jpg" alt="rs_img" />
                                        </div>
                                        <div className="ne_re_bottom_img_cont">
                                            <h1>Tampere Champions Cup</h1>
                                            <p><a href="#"><span>Towfiq Omi</span> / 2 days ago</a>
                                            </p>
                                            <p>Tampere Champions Cup first edition will be help from June 10-12 2013. The first edition of this tournament is </p>
                                            <a href="#">read more...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="ne_re_left_bottom_main_wrapper aa">
                                        <div className="ne_re_bottom_img">
                                            <img src="./src/images/badminton/news1.jpg" alt="rs_img" />
                                        </div>
                                        <div className="ne_re_bottom_img_cont">
                                            <h1>Tampere Champions Cup</h1>
                                            <p><a href="#"><span>Towfiq Omi</span> / 2 days ago</a>
                                            </p>
                                            <p>Tampere Champions Cup first edition will be help from June 10-12 2013. The first edition of this tournament is </p>
                                            <a href="#">read more...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="ne_re_left_bottom_main_wrapper aa">
                                        <div className="ne_re_bottom_img">
                                            <img src="./src/images/badminton/news1.jpg" alt="rs_img" />
                                        </div>
                                        <div className="ne_re_bottom_img_cont">
                                            <h1>Tampere Champions Cup</h1>
                                            <p><a href="#"><span>Towfiq Omi</span> / 2 days ago</a>
                                            </p>
                                            <p>Tampere Champions Cup first edition will be help from June 10-12 2013. The first edition of this tournament is </p>
                                            <a href="#">read more...</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="mews_img_wrapper float_left">
                            <img src="./src/images/badminton/news_banner.jpg" className="img-responsive" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer_wrapper float_left">
            <div className="section_2">
            <div className="section2_footer_overlay"></div>    
            <div className="section2_footer_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-xs-12 col-sm-6">
                            <div className="footer_widget section2_about_wrapper">
                                <div className="wrapper_first_image">
                                    <a href="index.html"><img src="./src/images/badminton/logo_footer.png" className="img-responsive" alt="logo" /></a>
                                </div>
                                <div className="abotus_content">
                                    <p>Tampere is a city in southern Finland. It sits between Näsijärvi Lake and Pyhäjärvi Lake, with the Tammerkoski rapids in between. 
                                    </p>
                                    
                                </div>
                            </div>    
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 col-sm-6">
                            
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 col-sm-6">
                            <div className="footer_widget section2_useful_wrapper">
                                <h4>useful links </h4>
                                <ul>
                                    <li><a href="#"><i className="fa fa-angle-right"></i>About</a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right"></i>TBPL History</a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right"></i>Tampere Team</a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right"></i>Tampere Events</a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-angle-right"></i>Tampere cricket</a> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12 col-sm-6">
                            <div className="footer_widget section2_useful_second_wrapper">
                                <h4>contact <span> info </span></h4>
                                <ul>
                                    <li><i className="fa fa-location-arrow"></i>Kuusikkopuiston kenttä
                                    </li>
                                    <li><i className="fa fa-flag"></i> Ruovedenkatu 12, 33720 Tampere
                                    </li>
                                    <li><i className="fa fa-phone-square"></i>Tam Bangla Society
                                    </li>
                                    <li><a href="#"><i className="fa fa-envelope-square"></i>tamperechampionscup@gmail.com
</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            </div>
            <div className="close_wrapper">
            </div>

        </div>
            
    </div>
    );
  }