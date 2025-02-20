import { getMyData, isBrowserCompatible, renderSyndicate} from "../shared.js";

export const homePage = async () => {
    const mainContent = document.getElementById('root');
    const isCompatible = isBrowserCompatible();
    mainContent.innerHTML = `
        ${!isCompatible ? `<span class="not-compatible">Connect web application is only compatible with Chrome, Safari, Firefox or Edge.</span>` : ``}
        <div class="row connectBody1">
            <div class="col-lg-2 o">
            </div>
            <div class="col-lg-4 d-none d-sm-flex text-lg-left text-center" style="text-align:center;">
                <p class = "homeTitleText" style="text-align:left; font-family: 'Montserrat', sans-serif;">
                
                    Connect <em>today.</em>
                    <br>Prevent cancer
                    <br><em>tomorrow.</em>
                    <br>
                    <br>
                    <img src="./images/newImages/ConnectLogo.png" alt="Connect logo">
                    <br><br>
                    
                </p>
            </div>
            <div class="col-lg-4 d-sm-none text-lg-left text-center" style="text-align:center;">
                <p class = "homeTitleTextMobile " style="text-align:center; font-family: 'Montserrat', sans-serif;">
                
                    Connect <em>today.</em>
                    <br>Prevent cancer
                    <br><em>tomorrow.</em>
                    <br>
                    <br>
                    <img src="./images/newImages/ConnectLogo.png" alt="Connect logo">
                    <br><br>
                    
                </p>
            </div>
            <div class="col-lg-4">
                <div class="signInWrapper" id="signInWrapperDiv">
                    <p class="loginTitleFont" style="text-align:center;">Sign In | Join the Study</p>
                    <div id="signInDiv">
                    </div>
                    <p>
                        <div style="font-size:12px;padding-left:24px; padding-right:24px;margin:auto;.">
                            If you have an account, please sign in with the email or phone number you used to create your account.
                        </div>
                    </p>
                    <div style="font-size:8px;padding-left:24px; padding-right:24px;margin:auto;.">
                        You are accessing a U.S. Government web site which may contain information that must be protected under the U.S. Privacy Act or other sensitive information and is intended for Government authorized use only. Unauthorized attempts to upload information, change information, or use of this web site may result in disciplinary action, civil, and/or criminal penalties. Unauthorized users of this web site should have no expectation of privacy regarding any communications or data processed by this web site. Anyone accessing this web site expressly consents to monitoring of their actions and all communication or data transitioning or stored on or related to this web site and is advised that if such monitoring reveals possible evidence of criminal activity, NIH may provide that evidence to law enforcement officials.
                    </div>
                </div>
            </div>
            <div class="col-lg-2 order-4">
            </div>
        </div>
        <div class="row connectBody">
            <div class="col-lg-2 ">
            </div>
            <div class="col-lg-4 .d-none text-lg-left text-center connectBodyPicture" >
                <img src="./images/newImages/Tiles2.png" alt="Connect logo" width="95%" style="float:left; max-width:380px">
            </div>
            <div class="col-lg-4">
            </div>
            <div class="col-lg-2 order-4">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-2">
            </div>
            <div class="col-lg-4" style="text-align:left;">
                <p class="MonteserratFont" style = "color:#606060; font-size: 28px;">
                    <b>
                    Are you age 40 to 65 with no history of certain cancers?*    
                    </b>
                </p>
                <p class="NotoSansFont" style="color:#606060; font-size: 18px;">
                    We need your help. We invite you to join a research study from the National Cancer Institute, part of the National Institutes of Health, to help understand what causes cancer and how to prevent it.
                </p>
                <p class="NotoSansFont" style="color:#606060; font-size: 15px;">
                    *If you have or once had non-melanoma skin cancer (like basal cell or squamous cell carcinoma), or a condition that raises the risk of getting cancer (like DCIS, or stage 0 breast cancer), you can still join Connect.
                </p>
                
            </div>
            <div class="col-lg-4">
                <img src="./images/newImages/Group2.png" alt="Group Picture" style="width:100%">
            </div>
            <div class="col-lg-1">
            </div>
        </div>
       <!--
        <div class="row">
            <div class="col-lg-2">
            </div>
            <div class="col-lg-4" style="text-align:left;">
                <p style = "color:#606060; font-size: 28px;">
                    <b>
                    Are you age 40 to 65 with no history of certain cancers?*    
                    </b>
                </p>
                <p style="color:#606060; font-size: 18px;">
                    We need your help. We invite you to join a research study from the National Cancer Institute, part of the National Institutes of Health, to help understand what causes cancer and how to prevent it.
                </p>
                <p style="color:#606060; font-size: 15px;">
                    *If you have or once had non-melanoma skin cancer (like basal cell or squamous cell carcinoma), or a condition that raises the risk of getting cancer (like DCIS, or stage 0 breast cancer), you can still join Connect.
                </p>
                
            </div>
            <div class="col-lg-4">
                <img src="./images/newImages/Group2.png" alt="Group Picture" style="width:100%">
            </div>
            <div class="col-lg-1">
            </div>
        </div>
        <div class="row" style="margin-bottom:50px">
            <div class="col-lg-2">
            </div>
            <div class ="col-lg-8" style="text-align:center">
                <p style="color:#606060; font-size:28px;">
                    <b>
                        Participating Health Care Systems
                    </b>
                </p>
                <br>
                <img src="./images/newImages/Group3.png" alt="Group Picture" style="width:100%">
            </div>
            <div class="col-lg-2">
            </div>
        </div>
        -->
        <!--
        <div class="alert alert-warning" id="nextStepWarning" style="margin-top:10px;">
        </div>
        
        <div class="row">
            <h2 style="margin:auto">5 Steps to Connect</h2>
        </div>
        <div class="row">
           
            <div class="col-sm-1"></div>
            <div class="col-sm-10">
                <ul style="display:grid; grid-template-columns:20% 20% 20% 20% 20%;list-style-type:none; padding-left:0px;" >
                    <li>
                        <div class="row" style="padding-bottom:0px">
                            <h2 style="font-size:75px; line-height:100px; margin-left:auto">1</h2>
                            <div style="text-align:center;width:100px;height:100px;background:#005ea2;border-radius:50%;border:5px solid #005ea2;line-height:17px;color:white; margin-right:auto;">
                                <i class="far fa-hospital" style="font-size:60px; line-height:80px">
                                </i>
                            </div>
                        </div>
                        <div style="text-align:center">
                            Choose Health Care Provider
                        </div>
                    </li>
                    <li>
                        <div class="row" style="padding-bottom:0px">
                            <h2 style="font-size:75px; line-height:100px; margin-left:auto">2</h2>
                            <div style="text-align:center;width:100px;height:100px;background:#FFBF17;border-radius:50%;border:5px solid #FFBF17;line-height:17px;color:white; margin-right:auto;">
                                <i class="fas fa-clipboard-check" style="font-size:60px; line-height:80px">
                                </i>
                            </div>
                        </div>
                        <div style="text-align:center">
                            Sign e-Consent Forms
                        </div>
                    </li>
                    <li>
                        <div class="row" style="padding-bottom:0px">
                            <h2 style="font-size:75px; line-height:100px; margin-left:auto">3</h2>
                            <div style="text-align:center;width:100px;height:100px;background:#606060;border-radius:50%;border:5px solid #606060;line-height:17px;color:white; margin-right:auto;">
                                <i class="fas fa-user" style="font-size:60px; line-height:80px">
                                </i>
                            </div>
                        </div>
                        <div style="text-align:center">
                            Fill Out User Profile
                        </div>
                    </li>
                    <li>
                        <div class="row" style="padding-bottom:0px">
                            <h2 style="font-size:75px; line-height:100px; margin-left:auto">4</h2>
                            <div style="text-align:center;width:100px;height:100px;background:#005ea2;border-radius:50%;border:5px solid #005ea2;line-height:17px;color:white; margin-right:auto;">
                                <i class="fas fa-check" style="font-size:60px; line-height:90px">
                                </i>
                            </div>
                        </div>
                        <div style="text-align:center">
                            Wait for Verification
                        </div>
                    </li>
                    <li>
                        <div class="row" style="padding-bottom:0px">
                            <h2 style="font-size:75px; line-height:100px; margin-left:auto">5</h2>
                            <div style="text-align:center;width:100px;height:100px;background:#FFBF17;border-radius:50%;border:5px solid #FFBF17;line-height:17px;color:white; margin-right:auto;">
                                <i class="fab fa-wpforms" style="font-size:60px; line-height:90px">
                                </i>
                            </div>
                        </div>
                        <div style="text-align:center">
                            Complete Surveys
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-sm-1"></div>
        </div>
        <div class="row">
            <div class="col-sm-9 images-grid">
                <div class="row images-row">
                    <div class="col-sm-4 images-col">
                        <img class="landing-page-images" src="./images/1.webp">
                    </div>
                    <div class="col-sm-4 images-col">
                        <img class="landing-page-images" src="./images/2.webp">
                    </div>
                    <div class="col-sm-4 images-col">
                        <img class="landing-page-images" src="./images/3.webp">
                    </div>
                </div>
                <div class="row images-row">
                    <div class="col-sm-6 images-col">
                        <img class="landing-page-images" src="./images/4.webp">
                    </div>
                    <div class="col-sm-6 images-col">
                        <img class="landing-page-images" src="./images/5.webp">
                    </div>
                </div>
            </div>
            <div class="col-sm-3 join-now-col" id="joinNow"></div>
        </div>
        <div class="row">
            <h2 style="margin:auto">Participating Sites</h2>
        </div>
        <div class="row" id="siteLogos">
            <div class="col" style="text-align:center"><span class="site-logo-helper"></span><img src="./images/Chicago Vector.png" class="site-logo"></div>
            <div class="col" style="text-align:center"><span class="site-logo-helper"></span><img src="./images/hf vector.png" class="site-logo"></div>
            <div class="col" style="text-align:center"><span class="site-logo-helper"></span><img src="./images/hp vector.png" class="site-logo"></div>
            <div class="col" style="text-align:center"><span class="site-logo-helper"></span><img src="./images/kp vector.png" class="site-logo"></div>
            <div class="col" style="text-align:center"><span class="site-logo-helper"></span><img src="./images/marsh vector.png" class="site-logo"></div>
            <div class="col" style="text-align:center"><span class="site-logo-helper"></span><img src="./images/norc vector.png" class="site-logo"></div>
            <div class="col" style="text-align:center"><span class="site-logo-helper"></span><img src="./images/sanford vector.png" class="site-logo"></div>
        </div>
        <div class="row">
            <div class="col-md-3 about-cancer">
                <div class="row">
                    <span class="heading">Advancing Cancer Research</span> <i class="fab fa-searchengin"></i>
                </div>
                <div class="row">
                    <span class="description">
                        The Connect Study wants to better understand:
                        <ul class="list">
                            <li><strong>What causes cancer,</strong></li>
                            <li><strong>Ways to prevent cancer, and</strong></li>
                            <li><strong>How to improve early detection of cancer.</strong></li>
                        </ul>
                    </span>
                </div>
            </div>
            <div class="col-md-3 about-cancer">
                <div class="row">
                    <span class="heading">Why should I join Connect?</span> <i class="fas fa-users"></i>
                </div>
                <div class="row">
                    <span class="description">
                        <strong>Being a part of Connect means you are contributing to the future of cancer prevention for our families and communities.</strong></br>
                        With your help, Connect will be one of the largest and most important cancer studies in the United States.    
                    </span>
                </div>
            </div>
            <div class="col-md-3 about-cancer">
                <div class="row">
                    <span class="heading">Who can join Connect?</span> <i class="fas fa-female"></i><i class="fas fa-male"></i>
                </div>
                <div class="row">
                    <span class="description">
                        <ul class="list">
                            <li><strong>Men and women between the ages of 40 and 65</strong></li>
                            <li><strong>Current (patients/members) of participating sites</strong></li>
                            <li><strong>No previous history of cancer</strong> (other than non-melanoma skin cancer)</li>
                        </ul>
                    </span>
                </div>
            </div>
            <div class="col-md-2">
                <div class="row">
                    <span class="heading">Share Connect</span> <i class="fas fa-share"></i>
                </div>
                <div class="row">
                    <img class="bar-code-image" src="./images/connectApp.png">
                </div>
            </div>
        </div> 
        -->
        
    `;

    
}

export const joinNowBtn = (bool) => {
    if(bool){
        return `<span class="join-now-heading">What causes and prevents cancer? Help researchers answer this question for future generations</span>
        </br><a class="btn join-now-btn" href="#sign_in">Join Now</a>`
    }
    else {
        return `<span class="join-now-heading">Thanks for joining Connect Cohort Study!</span>`
    }
}

export const whereAmIInDashboard = async () => {
    let myData = await getMyData();
    if(myData.code != 200){
        
        return '';

    }
    let data = myData.data;
    if(data['827220437'] && data['142654897']){
        if(data['919254129'] === 353358909){
            if(data['699625233'] && data['699625233'] === 353358909 && data['821247024'] && data['821247024'] !== 197316935){
                //Awaiting verification
                return 'You are awaiting verifiction';
            }
            if(data['699625233'] && data['699625233'] === 353358909){
                
                //go do your surveys
                return 'Please go fill out your surveys <a href="#dashboard">Here</a>';
            }
            //fill out your user profile
            return 'Please go and ill out your user profile <a href="#dashboard">Here</a>';
        }
        //sign e-consent
        return 'Please go and sign the e-consent form <a href="#dashboard">Here</a>';
    }
    else if(data['827220437'] && !data['142654897']){
        //heard about study
        return 'Where did you hear about this study <a href="#dashboard">Here</a>'
    }
    else if(data['379080287']){
        //pin
        return 'Please tell us if you already have a pin <a href="#dashboard">Here</a>'
    }
    else{
        //Choose health care provider
        return 'Please tell us your health provider <a href="#dashboard">Here</a>'
    }
}

export const renderHomeAboutPage =  () => {
    
    const mainContent = document.getElementById('root');
    const isCompatible = isBrowserCompatible();
    mainContent.innerHTML = `
        ${!isCompatible ? `<span class="not-compatible">Connect web application is only compatible with Chrome, Safari, Firefox or Edge.</span>` : ``}
        <div class="row">
            <div class="col-1">
            </div>
            <div class="col-10" id="connectBody">
            </div>
            <div class="col-1">
            </div>
        </div>
        `
    renderSyndicate("https://api.digitalmedia.hhs.gov/api/v2/resources/media/19351/syndicate.json?stripStyles=false&stripScripts=false&stripBreaks=false&stripImages=false&stripClasses=false&stripIds=false&displayMethod=undefined&autoplay=false","connectBody", 'about')
    window.scrollTo(0, 0);
}
export const renderHomeExpectationsPage = () => {
    
    const mainContent = document.getElementById('root');
    const isCompatible = isBrowserCompatible();
    mainContent.innerHTML = `
        ${!isCompatible ? `<span class="not-compatible">Connect web application is only compatible with Chrome, Safari, Firefox or Edge.</span>` : ``}
        <div class="row">
        <div class="col-1">
        </div>
        <div class="col-10" id="connectBody">
        </div>
        <div class="col-1">
        </div>
        </div>
        `
    renderSyndicate("https://api.digitalmedia.hhs.gov/api/v2/resources/media/19350/syndicate.json?stripStyles=false&stripScripts=false&stripBreaks=false&stripImages=false&stripClasses=false&stripIds=false&displayMethod=undefined&autoplay=false","connectBody", 'expectations')
    window.scrollTo(0, 0);
    let sections = document.getElementsByTagName('h2')
    //console.log(sections)
    
    
    console.log(sections[0]);
}
export const renderHomePrivacyPage =  () => {
    const mainContent = document.getElementById('root');
    const isCompatible = isBrowserCompatible();
    mainContent.innerHTML = `
        ${!isCompatible ? `<span class="not-compatible">Connect web application is only compatible with Chrome, Safari, Firefox or Edge.</span>` : ``}
        <div class="row">
        <div class="col-1">
        </div>
        <div class="col-10" id="connectBody">
        </div>
        <div class="col-1">
        </div>
        </div>
        `
    renderSyndicate("https://api.digitalmedia.hhs.gov/api/v2/resources/media/19352/syndicate.json?stripStyles=false&stripScripts=false&stripBreaks=false&stripImages=false&stripClasses=false&stripIds=false&displayMethod=undefined&autoplay=false","connectBody", 'privacy')
    window.scrollTo(0, 0);

}
