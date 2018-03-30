$("#shouldersBtn").on("click", function () {
    $("#exerciseBtns").empty();
    $("#exerciseGifs").empty();
    $("#exercises").empty();

    var mPress = $("<button>");
    mPress.addClass("btn btn-warning")
    mPress.attr("id", "mPress")
    mPress.text("Military Press")
    $("#exerciseBtns").append(mPress)

    var fRaise = $("<button>");
    fRaise.addClass("btn btn-warning")
    fRaise.attr("id", "fRaise")
    fRaise.text("Front Raise")
    $("#exerciseBtns").append(fRaise)

    var uRow = $("<button>");
    uRow.addClass("btn btn-warning")
    uRow.attr("id", "uRow")
    uRow.text("Upright Row")
    $("#exerciseBtns").append(uRow)

    var yRaise = $("<button>");
    yRaise.addClass("btn btn-warning")
    yRaise.attr("id", "yRaise")
    yRaise.text("Y Raise")
    $("#exerciseBtns").append(yRaise)

    var boRow = $("<button>");
    boRow.addClass("btn btn-warning")
    boRow.attr("id", "boRow")
    boRow.text("Bentover Row")
    $("#exerciseBtns").append(boRow)

    var rFly = $("<button>");
    rFly.addClass("btn btn-warning")
    rFly.attr("id", "rFly")
    rFly.text("Reverse Fly")
    $("#exerciseBtns").append(rFly)

    var shrug = $("<button>");
    shrug.addClass("btn btn-warning")
    shrug.attr("id", "shrug")
    shrug.text("Shrug")
    $("#exerciseBtns").append(shrug)

    $("#mPress").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/9714/3938/5138/BBMilitaryPressBentLeg.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions</h3>' + '<h4>Preparation</h4>' + '<h6>Grasp barbell from rack or clean barbell from floor with overhand grip, slightly wider than shoulder width. Position bar in front of neck. (note: while some will position the bar behind the neck, this can lead to injury and provides no real benefits)</h6>' + '<h4>Execution</h4>' + '<h6>Press bar upward until arms are extended overhead. Lower to front of neck and repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Feet may be positioned shoulder width apart or one foot in front of other with forward leg slightly bent (as shown). Upper chest assists (instead of side delts) since grip is slightly narrower and chest is high with low back arched back slightly. Also known as Overhead Press.</h6>')

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);

    });

    $("#fRaise").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();
        
        var gif = $("<img src='https://www.exrx.net/application/files/1614/3938/5121/BBFrontRaise.gif'>");
        
        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Grasp barbell with overhand grip with elbows straight or slightly bent.</h6>' + '<h4>Execution</h4>' + '<h6>Start with hands at waist level. Raise barbell forward and upward until upper arms are above horizontal. Lower and repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Absolute height of movement may depend on range of motion. Raise should be limited to height achieved just before tightness is felt in shoulder capsule. Alternatively, height just above horizontal may be considered adequate. Elbows may be kept straight or slightly bent throughout movement.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#uRow").on("click", function() {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/6014/3884/9752/BBUprightRowM.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Grasp bar with shoulder width or slightly narrower overhand grip.</h6>' + '<h4>Execution</h4>' + '<h6>Pull bar to neck with elbows leading. Allow wrists to flex as bar rises. Lower and repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Bar can be recieved from barbell rack, standing behind bar mid-thigh height.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#yRaise").on("click", function() {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/5114/3884/9771/CBYRaise.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Stand facing between low pulleys medium width apart, grasp left stirrup with right hand and right stirrup with left hand. Step back slightly away from pulleys and stand upright with cables crossed in front of hips.</h6>' + '<h4>Execution</h4>' + '<h6>With elbows slightly bent, raise arms upward and outward to sides in Y configuration until elbows are approximately lateral to each ear. Lower stirrups forward and downward in reverse pattern. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Maintain fixed slightly bent elbow position throughout exercise. Stirrup is raised by combining shoulder abduction and flexion. Slight shoulder external rotation may occur with elbows bent. Front Deltoid assists shoulder flexion if upper arm angle is slightly high. Rear Deltoid assists shoulder horizontal abduction if upper arm angle is slightly low.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#boRow").on("click", function() {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/5414/3884/9944/BBRearDeltRow.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Bend knees slightly and bend over bar with back straight, approximately horizontal. Grasp bar with wide overhand grip.</h6>' + '<h4>Execution</h4>' + '<h6>Keeping upper arm perpendicular to torso, pull barbell up toward upper chest until upper arms are just beyond horizontal. Return and repeat.</h6>' + '<h4>Comments</h4>' + '<h6>If upper arm travels closer than perpendicular to trunk, latissimus dorsi becomes involved. Elbows should be raised directly lateral to shoulders. Positioning torso at 45° is not sufficient angle to target rear deltoids. Keep torso bent over approximately horizontal. Knees are bent in effort to keep low back straight. If low back becomes rounded due to tight hamstrings, either knees should be bent more or torso may not be positioned as low. If low back is rounded due to poor form, deadlift weight to standing position and lower torso into horizontal position with knees bent and back straight. Much lighter resistance is required as Barbell Bent-over Row.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#rFly").on("click", function() {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/3514/3884/9972/CBStandingRearDeltFly.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Stand facing twin pulley cables positioned close together and approximately shoulder height. Grasp stirrup cable attachment in each hand. Step back away from machine so cable is taut. Stand with feet staggered. Point elbows outward with arms straight or slightly bent.</h6>' + '<h4>Execution</h4>' + '<h6>Pull stirrups out to sides, maintaining stiff elbow position throughout exercise. Return to original position and repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Upper arms should travel in horizontal path at shoulder height (not downward) to minimize Latissimus Dorsi involvement.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#shrug").on("click", function() {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/5914/3886/3474/BBShrug.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Stand holding barbell with overhand or mixed grip; shoulder width or slightly wider.</h6>' + '<h4>Execution</h4>' + '<h6>Elevate shoulders as high as possible. Lower and repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Since this movement becomes more difficult as full shoulder elevation is achieved, height criteria for shoulder elevation may be needed. For example, raising shoulders until slope of shoulders becomes horizontal may be considered adequate depending upon individual body structure and range of motion with lighter weight.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

});

$("#armsBtn").on("click", function () {
    $("#exerciseBtns").empty();
    $("#exerciseGifs").empty();
    $("#exercises").empty();

    var hCurl = $("<button>");
    hCurl.addClass("btn btn-success")
    hCurl.attr("id", "hCurl")
    hCurl.text("Hammer Curl")
    $("#exerciseBtns").append(hCurl)

    var pCurl = $("<button>");
    pCurl.addClass("btn btn-success")
    pCurl.attr("id", "pCurl")
    pCurl.text("Preacher Curl")
    $("#exerciseBtns").append(pCurl)

    var rCurl = $("<button>");
    rCurl.addClass("btn btn-success")
    rCurl.attr("id", "rCurl")
    rCurl.text("Reverse Curl")
    $("#exerciseBtns").append(rCurl)

    var wCurl = $("<button>");
    wCurl.addClass("btn btn-success")
    wCurl.attr("id", "wCurl")
    wCurl.text("Wrist Curl")
    $("#exerciseBtns").append(wCurl)

    var kBack = $("<button>");
    kBack.addClass("btn btn-success")
    kBack.attr("id", "kBack")
    kBack.text("Kickback")
    $("#exerciseBtns").append(kBack)

    var dip = $("<button>");
    dip.addClass("btn btn-success")
    dip.attr("id", "dip")
    dip.text("Dip")
    $("#exerciseBtns").append(dip)

    var sCrush = $("<button>");
    sCrush.addClass("btn btn-success")
    sCrush.attr("id", "sCrush")
    sCrush.text("Scull Crusher")
    $("#exerciseBtns").append(sCrush)

    $("#hCurl").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/2014/3938/4751/CBHammerCurlRope.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Grasp cable rope with palms facing inward. Stand upright with arms straight down to sides.</h6>' + '<h4>Execution</h4>' + '<h6>With elbows to side, raise rope forward and upward with both arms until forearms are vertical. Lower until arms are fully extended. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>When elbows are fully flexed, they can travel forward slightly, allowing forearms to be no more than vertical. This additional movement allows for relative release of tension in muscles between repetitions.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#pCurl").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/2514/3938/4633/BBPreacherCurl.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Sit on preacher bench placing back of arms on pad. Grasp curl bar with shoulder width underhand grip.</h6>' + '<h4>Execution</h4>' + '<h6>Raise bar until forearms are vertical. Lower barbell until arms are fully extended. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Seat should be adjusted to allow arm pit to rest near top of pad. Back of upper arm should remain on pad throughout movement. The long head (lateral head) of biceps brachii is activated significantly more than short head (medial head) of biceps brachii since short head enters into active insufficiency as it continues to contract.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#rCurl").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/8814/3938/4744/BBReverseCurl.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Grasp bar with shoulder width overhand grip.</h6>' + '<h4>Execution</h4>' + '<h6>With elbows to side, raise bar until forearms are vertical. Lower until arms are fully extended. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>When elbows are fully flexed, they can travel forward slightly, allowing forearms to be no more than vertical. This additional movement allows for relative release of tension in muscles between repetitions.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#wCurl").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/4314/3886/5315/BBWristCurl.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Sit and grasp bar with narrow to shoulder width underhand grip. Rest forearms on thighs with wrists just beyond knees.</h6>' + '<h4>Execution</h4>' + '<h6>Allow barbell to roll out of palms down to fingers. Raise barbell back up by gripping and pointing knuckles up as high as possible. Lower and repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Keep elbows approximately wrist height to maintain resistance through full range of motion.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#kBack").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/3714/3886/4965/DBKickback.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Kneel over bench with arm supporting body. Grasp dumbbell. Position upper arm parallel to floor.</h6>' + '<h4>Execution</h4>' + '<h6>Extend arm until it is straight. Return and repeat. Continue with opposite arm.</h6>' + '<h4>Comments</h4>' + '<h6>For greater range of motion, upper arm can be positioned with elbow slightly higher than shoulder.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#sCrush").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/3614/3886/3986/BBLyingTricepsExtension.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Lie on bench with narrow overhand grip on barbell. Position barbell over forehead with arms extended.</h6>' + '<h4>Execution</h4>' + '<h6>Lower bar by bending elbows. As bar nears head, move elbows slightly back just enough to allow bar to clear around curvature of head. Extend arms. As bar clears head, reposition elbows to their former position until arms are fully extended. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>With arms fully extended, bar can be brought back over upper chest. Shoulders can be internally rotated between repetitions as needed to allow for relative release of tension in muscles. Barbell can be received from the floor or from rack either situated over abdomen or from behind head. Exercise can also be performed with straight barbell. Movement with cambared bar as shown above is also known as EZ Barbell or EZ Bar Lying Triceps Extension.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#dip").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/6714/3886/3999/BWBenchDipLegsElevated.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6></h6>' + '<h4>Execution</h4>' + '<h6></h6>' + '<h4>Comments</h4>' + '<h6>Bench height should allow for full range of motion.>' + '<h6><strong>Easier: </strong>Resistance can be reduced by placing heels on floor.</h6>' + '<h6><strong>Harder: </strong>Weight can be placed on lap to increase resistance or movement can be performed on parallel bars.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

});

$("#chestBtn").on("click", function () {
    $("#exerciseBtns").empty();
    $("#exerciseGifs").empty();
    $("#exercises").empty();

    var bPress = $("<button>");
    bPress.addClass("btn btn-danger")
    bPress.attr("id", "bPress")
    bPress.text("Bench Press")
    $("#exerciseBtns").append(bPress)

    var cDip = $("<button>");
    cDip.addClass("btn btn-danger")
    cDip.attr("id", "cDip")
    cDip.text("Chest Dip")
    $("#exerciseBtns").append(cDip)

    var fly = $("<button>");
    fly.addClass("btn btn-danger")
    fly.attr("id", "fly")
    fly.text("Fly")
    $("#exerciseBtns").append(fly)

    var pOver = $("<button>");
    pOver.addClass("btn btn-danger")
    pOver.attr("id", "pOver")
    pOver.text("Pullover")
    $("#exerciseBtns").append(pOver)

    var pUp = $("<button>");
    pUp.addClass("btn btn-danger")
    pUp.attr("id", "pUp")
    pUp.text("Push-up")
    $("#exerciseBtns").append(pUp)

    var pkUp = $("<button>");
    pkUp.addClass("btn btn-danger")
    pkUp.attr("id", "pkUp")
    pkUp.text("Pike Push-up")
    $("#exerciseBtns").append(pkUp)

    var pDec = $("<button>");
    pDec.addClass("btn btn-danger")
    pDec.attr("id", "pDec")
    pDec.text("Pec Deck")
    $("#exerciseBtns").append(pDec)

    $("#bPress").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/2315/2069/6083/BBBenchPress.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Lie supine on bench. Dismount barbell from rack over upper chest using wide oblique overhand grip.</h6>' + '<h4>Execution</h4>' + '<h6>Lower weight to chest. Press bar upward until arms are extended. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Range of motion will be compromised if grip is too wide.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#cDip").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/6114/3885/7807/BWChestDip.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Mount wide dip bar with oblique grip (bar diagonal under palm), arms straight with shoulders above hands. Bend knees and hips slightly.</h6>' + '<h4>Execution</h4>' + '<h6>Lower body by bending arms, allowing elbows to flare out to sides. When slight stretch is felt in chest or shoulders, push body up until arms are straight. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6><strong>Easier: <Strong>To decrease difficulty, get assistance from machine or training partner. Also try performing movement between two benches or self assisted by placing feet on bench or elevation.</h6>' + '<h6><strong>Harder: <strong>Added weight can be placed on dip belt or dumbbell can be placed between ankles to increase intensity.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#fly").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/3214/3885/7905/DBFly.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Grasp two dumbbells. Lie supine on bench. Support dumbbells above chest with arms fixed in slightly bent position. Internally rotate shoulders so elbows point out to sides.</h6>' + '<h4>Execution</h4>' + '<h6>Lower dumbbells to sides until chest muscles are stretched with elbows fixed in slightly bent position. Bring dumbbells together in wide hugging motion until dumbbells are nearly together. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Keep shoulders internally rotated so elbows point downward at bottom position and outward at top position. Keep elbows at fixed angle, only slightly bent.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#pOver").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/8014/3885/7881/DBPullover.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Lie on upper back perpendicular to bench. Flex hips slightly. Grasp one dumbbell from behind or from side with both hands under inner plate of dumbbell. Position dumbbell over chest with elbows slightly bent.</h6>' + '<h4>Execution</h4>' + '<h6>Keeping elbows slightly bent throughout movement, lower dumbbell over and beyond head until upper arms are in-line with torso. Pull dumbbell up and over chest. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Lower body extending off of bench acts as counter balance to resistance and keeps upper back fixed on bench. Avoid hips from raising up significantly. Actual range of motion is dependent upon individual shoulder flexibility. Keep elbows fixed at small bend throughout exercise.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#pUp").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/8714/3885/7822/BWPushupWide.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Lie prone on floor with hands slightly wider than shoulder width. Raise body up off floor by extending arms with body straight.</h6>' + '<h4>Execution</h4>' + '<h6>Keeping body straight, lower body to floor by bending arms. Push body up until arms are extended. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Both upper and lower body must be kept straight throughout movement.</h6>' + '<h6><strong>Easier: </strong>Resistance can be reduced by performing push-ups with knees bent on floor or placing hands on elevated horizontal bar, in between narrow doorway, or edge of elevated surface.</h6>' + '<h6><strong>Harder: </strong>For greater challenge, elevate feet, have partner hold weight on back, perform Chest Dips on parallel bars, or plyometric version for more power.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#pkUp").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/7114/3885/7428/BWFarPikePress.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Kneel on two benches positioned side by side slightly apart at end nearest head. Place hands on ends of benches. With forefeet on opposite ends of bench, raise rear end high up with arms, back, and knees straight.</h6>' + '<h4>Execution</h4>' + '<h6>Lower head between ends of benches by bending arms. Push body back up to original position by extending arms. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Pike Push-up (for upper chest) differs from Pike Press (for front delts) in that, feet are further away from hands so body is less inverted in lowest position.</h6>' + '<h6><strong>Easier: </strong>Resistance can be reduced by performing exercise on bench or apparatus with hands positioned higher than feet. Keep in mind, this specialized movement may not be necessary since upper chest can be utilized somewhat during pushup movements.</h6>' + '<h6><strong>Harder: </strong>For greater challenge, place feet closer to hands, emphasizing front delts.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#pDec").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/9114/3885/7968/LVFly.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Sit on machine with back on pad. If available, push foot lever until padded lever moves forward. Place forearms on padded lever. Position upper arms approximately parallel. Release foot lever.</h6>' + '<h4>Execution</h4>' + '<h6>Push levers together. Return until chest muscles are stretched. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>None.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

});

$("#backBtn").on("click", function () {
    $("#exerciseBtns").empty();
    $("#exerciseGifs").empty();
    $("#exercises").empty();

    var boRow = $("<button>");
    boRow.addClass("btn btn-primary")
    boRow.attr("id", "boRow")
    boRow.text("Bent-over Row")
    $("#exerciseBtns").append(boRow)

    var pUp = $("<button>");
    pUp.addClass("btn btn-primary")
    pUp.attr("id", "pUp")
    pUp.text("Push-up")
    $("#exerciseBtns").append(pUp)

    var ltPdn = $("<button>");
    ltPdn.addClass("btn btn-primary")
    ltPdn.attr("id", "ltPdn")
    ltPdn.text("Lat Pulldown")
    $("#exerciseBtns").append(ltPdn)

    var pOver = $("<button>");
    pOver.addClass("btn btn-primary")
    pOver.attr("id", "pOver")
    pOver.text("Pullover")
    $("#exerciseBtns").append(pOver)

    var iCross = $("<button>");
    iCross.addClass("btn btn-primary")
    iCross.attr("id", "iCross")
    iCross.text("Iron Cross")
    $("#exerciseBtns").append(iCross)

    var sRow = $("<button>");
    sRow.addClass("btn btn-primary")
    sRow.attr("id", "sRow")
    sRow.text("Seated Row")
    $("#exerciseBtns").append(sRow)

    var cgPdn = $("<button>");
    cgPdn.addClass("btn btn-primary")
    cgPdn.attr("id", "cgPdn")
    cgPdn.text("Closegrip Pulldown")
    $("#exerciseBtns").append(cgPdn)

    $("#boRow").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/7014/3938/4263/DBBentoverRow.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Kneel over side of bench by placing knee and hand of supporting arm on bench. Position foot of opposite leg slightly back to side. Grasp dumbbell from floor.</h6>' + '<h4>Execution</h4>' + '<h6>Pull dumbbell to up to side until it makes contact with ribs or until upper arm is just beyond horizontal. Return until arm is extended and shoulder is stretched downward. Repeat and continue with opposite arm.</h6>' + '<h4>Comments</h4>' + '<h6>Allow scapula to articulate but do not rotate torso in effort to throw weight up. Torso should be close to horizontal. Positioning supporting knee and/or arm slightly forward or back will allow for proper levelling of torso. Torso may be positioned lower to allow for heavier dumbbell to make contact with floor, if desired.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#pUp").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/5414/3885/4808/BWWideGripChinup.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Sit on inside of one of two benches placed parallel, slightly less than a legs length away. Place hands on edge of bench, straighten arms, slide rear end off of bench, and position heels on adjacent bench with legs straight.</h6>' + '<h4>Execution</h4>' + '<h6>Lower body by bending arms until slight stretch is felt in chest or shoulder, or rear end touches floor. Raise body and repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Range of motion will be compromised if grip is too wide.</h6>' + '<h6><strong>Easier: </strong>To decrease difficulty, use assisted machine, assisting partner, or self assisted by placing feet on bench or floor under bar.</h6>' + '<h6><strong>Harder: </strong>Added weight can be placed on dip belt or dumbbell can be placed between ankles to increase intensity.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#ltPdn").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/2414/3885/4817/CBFrontPulldown.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Grasp cable bar with wide grip. Sit with thighs under supports.</h6>' + '<h4>Execution</h4>' + '<h6>Pull down cable bar to upper chest. Return until arms and shoulders are fully extended. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Range of motion will be compromised if grip is too wide.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#pOver").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/6714/3885/4828/CBPullover.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Lie upper back perpendicular on bench. Flex hips slightly, so hips are slightly lower than torso. Grasp revolving barbell cable attachment from behind. Pull to position cable attachment over chest. Fix elbows with small bend.</h6>' + '<h4>Execution</h4>' + '<h6>Lower cable attachment toward pulley with elbows bent only slightly. Lower until shoulders are fully flexed or upper arms are in-line with upper torso. Raise cable attachment over head and continue toward lower body until cable becomes very close to head. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Lower body extending off of bench acts as counter balance to resistance and keeps upper back fixed on bench. Avoid hips from raising up significantly. Actual range of motion is dependent upon individual shoulder flexibility. Keep elbows fixed at small bend throughout exercise.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#iCross").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/1014/3885/4889/LVIronCross.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Stand on platform and grasp handles to sides with palms down grip.</h6>' + '<h4>Execution</h4>' + '<h6>With arms straight, pull lever handles down below hips. Return lever handles upward just above shoulder high, or just before slight pressure in shoulder is felt. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Platform should be adjusted so shoulder joint and girdle are approximate height as lever fulcrum.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#sRow").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/8114/3938/4416/LVSeatedRowNoPadPL.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Sit on seat and grasp handles with each hand. Place feet on vertically angled platform. Slide hips back with knees slightly bent.</h6>' + '<h4>Execution</h4>' + '<h6>Pull handles to waist while straightening torso upright. Pull shoulders back and push chest forward while arching back. Return until arms are extended, shoulders are stretched forward, and lower back is flexed forward. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Exercise is performed on apparatus with no chest pad, in contrast to standard lever seated row machine. This exercise is more similar to Cable Seated Row. Begin with light weight and add additional weight gradually to allow lower back adequate adaptation. Do not pause or bounce at bottom of lift. Do not lower weight beyond mild stretch. Full range of motion through lower back will vary from person to person. For even greater hip and low back articulation, hips may be slid back further with knees straighter.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#cgPdn").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/3514/3885/4815/CBCloseGripPulldown.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Grasp parallel cable attachment. Sit with thighs under supports.</h6>' + '<h4>Execution</h4>' + '<h6>Pull down cable attachment to upper chest. Return until arms and shoulders are fully extended. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>None.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

});

$("#legsBtn").on("click", function () {
    $("#exerciseBtns").empty();
    $("#exerciseGifs").empty();
    $("#exercises").empty();

    var squat = $("<button>");
    squat.addClass("btn btn-info")
    squat.attr("id", "squat")
    squat.text("Squat")
    $("#exerciseBtns").append(squat)

    var lunge = $("<button>");
    lunge.addClass("btn btn-info")
    lunge.attr("id", "lunge")
    lunge.text("Lunge")
    $("#exerciseBtns").append(lunge)

    var cRaise = $("<button>");
    cRaise.addClass("btn btn-info")
    cRaise.attr("id", "cRaise")
    cRaise.text("Calf Raise")
    $("#exerciseBtns").append(cRaise)

    var hThrust = $("<button>");
    hThrust.addClass("btn btn-info")
    hThrust.attr("id", "hThrust")
    hThrust.text("Hip Thrust")
    $("#exerciseBtns").append(hThrust)

    var lPress = $("<button>");
    lPress.addClass("btn btn-info")
    lPress.attr("id", "lPress")
    lPress.text("Leg Press")
    $("#exerciseBtns").append(lPress)

    var rKback = $("<button>");
    rKback.addClass("btn btn-info")
    rKback.attr("id", "rKback")
    rKback.text("Rear Kick Back")
    $("#exerciseBtns").append(rKback)

    var lCurl = $("<button>");
    lCurl.addClass("btn btn-info")
    lCurl.attr("id", "lCurl")
    lCurl.text("Leg Curl")
    $("#exerciseBtns").append(lCurl)

    $("#squat").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/6414/3885/0702/BBSquatPowerlift.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>From rack with barbell at upper chest height, position bar low on back of shoulders. Grasp barbell to sides. Dismount bar from rack and stand with wide stance.</h6>' + '<h4>Execution</h4>' + '<h6>Squat down by bending hips back while allowing knees to bend forward slightly, keeping back straight and knees pointed same direction as feet. Descend until thighs are just past parallel to floor. Extend hips and knees until legs are straight. Return and repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Keep head facing forward, back straight and feet flat on floor; equal distribution of weight through forefoot and heel. Knees should point same direction as feet throughout movement. At bottom of squat, crease at hips must be lower than top of knee cap.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#lunge").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/7414/3885/0758/DBLungeGlute.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Stand with dumbbells grasped to sides.</h6>' + '<h4>Execution</h4>' + '<h6>Lunge forward with first leg. Land on heel then forefoot. Lower body by flexing knee and hip of front leg until knee of rear leg is almost in contact with floor. Return to original standing position by forcibly extending hip and knee of forward leg. Repeat by alternating lunge with opposite leg.</h6>' + '<h4>Comments</h4>' + '<h6>Keep torso upright during lunge; flexible hip flexors are important. Lead knee should point same direction as foot throughout lunge. A long lunge emphasizes Gluteus Maximus; short lunge emphasizes Quadriceps.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#cRaise").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/9814/3885/0552/SFStandingCalfRaise.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Stand facing safety barbell on rack upper chest height and calf block on floor just below. Position toes and balls of feet on calf block with arches and heels extending off. Place hands on bar to each sides or on vertical rack bars. Position head in yoke with padded bar around shoulders. Dismount bar from rack by standing erect with safety bar, away yet close to rack.</h6>' + '<h4>Execution</h4>' + '<h6>Raise heels by extending ankles as high as possible. Lower heels by bending ankles until calves are stretched. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Position rack just below lowest range of motion. Calf block should be positioned so safety bar is close to but does not make contact with rack. Keep knees straight throughout exercise or bend knees slightly only during stretch. Quadriceps serve as synergists muscle if knees are bent slightly during stretch.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#hThrust").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/7314/8535/0981/BBHipThrust.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Sit on floor with long side of bench behind back. Roll barbell back and center over hips. Position upper back on corner of bench. Place feet on floor approximately shoulder width with knees bent. Grasp bar to each side.</h6>' + '<h4>Execution</h4>' + '<h6>Raise bar upward by extending hips until straight. Lower and repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Use bench of lower height 16" to 18" (40 to 46 cm) allowing torso to be angled approximately 45º. Bench may need to be secured so it does not slide on floor.</h6>' + '<h6>Bar must be high enough to allow clearance over hips. If 45lb (22kg) plates are too heavy, lighter Olympic-style bumper plates can be used.</h6>' + '<h6>Bar should be positioned across upper hip flexors and lower abdomen.. Thick bar padding or balance foam pad may need to be used if pelvis and hip flexor muscles do not over enough natural padding.</h6>' + '<h6>Find comfortable contact hinge position on bench and avoid sliding. Keep bar from rolling back near top of movement with hands on bar.</h6>' + '<h6>Movement should occur through hip with torso rigid. Avoid chest arching upward and anterior pelvic tilt, both producing spinal hyperextension.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#lPress").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/4414/3885/0780/LV45DegLegPressWide.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Sit on machine with back on padded support. Place feet slightly high on platform. Extend hips and knees. Release dock lever and grasp handles to sides.</h6>' + '<h4>Execution</h4>' + '<h6>Flex hips and knees to lower lever until hips are completely flexed. Push platform by extending knees and hips. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Adjust safety brace and back support to accommodate near full range of motion without forcing hips to bend at waist. Keep knees pointed same directions as feet. Do not allow heels to raise off of platform, pushing with both heel and forefoot. Knees should point same direction as feet throughout movement. Placing feet slightly high on platform emphasize Gluteus Maximus. Placing feet slightly lower on platform emphasize Quadriceps.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#rKback").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/1314/3885/0791/LVBentOverRearKickPL.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Lean over wide padded area, place forearms on padded arm rest, and grip handles. Bend knee and position foot against lever platform.</h6>' + '<h4>Execution</h4>' + '<h6>Push platform back by extending leg back. Return leg to original position. Repeat. Continue with opposite leg.</h6>' + '<h4>Comments</h4>' + '<h6>None.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#lCurl").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/4414/3885/1063/CBLyingLegCurl.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Attach two ankle cuffs to low pulley attachment. With cuffs on both ankles lie prone on flat bench with knees just beyond edge of bench. Grip under side or base of bench for support.</h6>' + '<h4>Execution</h4>' + '<h6>Raise ankles to glutes by flexing knees. Lower ankles until knees are straight. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Keep torso on bench to reduce hyperextension of lower back. Dorsal flexion of ankle reduces active insufficiency of Gastrocnemius allowing it to assist in knee flexion.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

});

$("#absBtn").on("click", function () {
    $("#exerciseBtns").empty();
    $("#exerciseGifs").empty();
    $("#exercises").empty();

    var wRoll = $("<button>");
    wRoll.addClass("btn btn-default")
    wRoll.attr("id", "wRoll")
    wRoll.text("Wheel Rollout")
    $("#exerciseBtns").append(wRoll)

    var sUp = $("<button>");
    sUp.addClass("btn btn-default")
    sUp.attr("id", "sUp")
    sUp.text("Sit-up")
    $("#exerciseBtns").append(sUp)

    var vUp = $("<button>");
    vUp.addClass("btn btn-default")
    vUp.attr("id", "vUp")
    vUp.text("V-up")
    $("#exerciseBtns").append(vUp)

    var turk = $("<button>");
    turk.addClass("btn btn-default")
    turk.attr("id", "turk")
    turk.text("Turkish Getup")
    $("#exerciseBtns").append(turk)

    var plank = $("<button>");
    plank.addClass("btn btn-default")
    plank.attr("id", "plank")
    plank.text("Plank")
    $("#exerciseBtns").append(plank)

    var aCoast = $("<button>");
    aCoast.addClass("btn btn-default")
    aCoast.attr("id", "aCoast")
    aCoast.text("Ab Coaster")
    $("#exerciseBtns").append(aCoast)

    var sPthru = $("<button>");
    sPthru.addClass("btn btn-default")
    sPthru.attr("id", "sPthru")
    sPthru.text("Suspended Pull Through")
    $("#exerciseBtns").append(sPthru)

    $("#wRoll").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/9214/3885/1513/BWKneelingWheelRollout.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Kneel on floor or mat. Grasp handles on wheel to each side with overhand grip. Position wheel near front of knees and lean over wheel with arms extended downward, supporting upper body.</h6>' + '<h4>Execution</h4>' + '<h6>With arms straight, roll wheel out as far as possible. Lower body gently to floor extending arms forward. Raise body back up by flexing hips and pulling arms back to original position. Return until hips are extended. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Keep elbows straight or nearly straight throughout exercise. Also known as Wheel Kneeling Rollout. Rectus Abdominis and Obliques practically contract isometrically since little waist flexion occurs under resistance. With no waist flexion, Rectus Abdominis and External Oblique act to stabilize pelvis and waist during hip flexion.</h6>' + '<h6><strong>Easier: </strong>Descending only part way down is much easier and can be performed in this way to progress into exercise. Movement can also be made easier by performing exercise up an incline (i.e. end of incline ab board or decline bench) or assisted by cable.</h6>' + '<h6><strong>Harder: </strong>Make sure to roll out until shoulder is fully extended through full range of motion. Exercise can be made much more challenging by performing exercise on feet with knees straight, up an incline, progressing to floor.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#sUp").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/8414/3886/1207/BWSitupNeck.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Hook feet under foot brace or secure low overhang. Lie supine on floor or bench with hips bent. Place hands behind neck or on side of neck.</h6>' + '<h4>Execution</h4>' + '<h6>Raise torso from bench by bending waist and hips. Return until back of shoulders contact incline board. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Feet can be held down by partner instead of foot bar. Certain individuals may need to keep their neck in neutral position with space between their chin and sternum. If upper back does not come completely down at end of movement, abdominal muscles may only be isometrically involved in exercise. Pectineus, Adductor Longus, and Brevis do not assist in hip flexion since hips are already initially bent.</h6>' + '<h6><stronger>Easier: </stronger>Movement can be made easier by placing arms further down away from head.</h6>' + '<h6><strong>Harder: </strong>Exercise can be made more challenging by placing hands further up on head or beyond head.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#vUp").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/2714/3886/1233/BWVup.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Sit on floor or mat. Lie supine with hands on floor over head.</h6>' + '<h4>Execution</h4>' + '<h6>Simultaneously raise straight legs and torso. Reach toward raised feet. Return to starting position. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>Keep knees straight throughout movement. Begin each repetition with upper back on floor to allow abdominal muscles to work dynamically. The Rectus Abdominis and Obliques dynamically contract only when actual waist flexion occurs. With no waist flexion, Rectus Abdominis and External Oblique will only isometrically contract to stabilize pelvis and waist during hip flexion.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#turk").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/2814/3885/7262/DBTurkishGetUp.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Lie supine on floor. Position dumbbell straight above shoulder with arm straight and vertical. Lie left arm out to side.</h6>' + '<h4>Execution</h4>' + '<h6>Stand up while keeping arm with dumbbell straight and vertical. Assist by using free arm, pushing off into floor. Return to floor by reversing movement.</h6>' + '<h4>Comments</h4>' + '<h6>Get up and down seamlessly, without jerky transitions.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#plank").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/thumbnails/small/7915/1965/7106/FrontPlank.jpg' width='160' height='100'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Lie prone on mat. Place forearms on mat, elbows under shoulders. Place legs together with forefeet on floor.</h6>' + '<h4>Execution</h4>' + '<h6>Raise body upward by straightening body in straight line. Hold position.</h6>' + '<h4>Comments</h4>' + '<h6>Muscles are exercised isometrically. Exercise can also be performed with straight supporting arms in pushup stance.</h6>' + '<h6><strong>Easier: </strong>Movement can be made easier angling body up on elevated platform or bench. Exercise can also be performed on bent knees instead of forefeet.</h6>' + '<h6><strong>Harder: </strong>Exercise could be made more challenging with added weight (eg: sandbags, partner) on hips or low back, although it is rarely performed in that manner. Raising one foot up off floor can also make holding this position more difficult.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#aCoast").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/9914/3886/1448/SLLegHipRaiseAbCoaster.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Straddle machine facing handles. Grasp handles on each side and place forearms on pads. Place shins on padded sled with knees forward and feet hanging off of back end. Sit back toward heels without bending over.</h6>' + '<h4>Execution</h4>' + '<h6>Slide forward and up by pulling knees up high. Deliberately attempt to flex waist in a "C" shape. Return sled down and back arching spine in opposite direction while keeping hips bent. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>If low back does flex near top of motion, abdominal muscles may only be isometrically involved in exercise. Pectineus, Adductor Longus, and Brevis do not assist in hip flexion since hips are already initially bent. Sled pad can be turned to either side to emphasize Obliques.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

    $("#sPthru").on("click", function () {
        $("#exerciseGifs").empty();
        $("#exercises").empty();

        var gif = $("<img src='https://www.exrx.net/application/files/6914/3886/1463/STPullThrough.gif'>")

        var instruct = $('<div>')
        instruct.html('<h3>Instructions<h3>' + '<h4>Preperation<h4>' + '<h6>Sit on floor with feet under suspension trainer loops in low position. Reach and grasp bottom of loops and lay back supine. Raise legs and place heels in loops with soles contacting handles (or ankles through loops as shown). Extend legs out straight. Sit up and place hands on floor to sides at desired distance from suspension trainer. Raise hips from floor, supporting upper body with arms.</h6>' + '<h4>Execution</h4>' + '<h6>Pull hips back while flexing spine in C shape. Raise hips up high by straightening spine and hips until straight.</h6>' + '<h4>Comments</h4>' + '<h6>Erector Spinae is exercised during spinal extension, whereas, Abdominals are exercised during spinal flexion.</h6>' + '<h6><stronger>Easier: </stronger>Movement can be made easier for Erector Spinae, yet harder for Abdominals by positioning body further back, away horizontally from anchor of suspension trainer.</h6>' + '<h6><stronger>Harder: </stronger>Movement can be made harder for Erector Spinae, yet easier for Abdominals by positioning body closer under anchor of suspension trainer.</h6>');

        $("#exerciseGifs").append(gif);
        $("#exercises").append(instruct);
    });

});