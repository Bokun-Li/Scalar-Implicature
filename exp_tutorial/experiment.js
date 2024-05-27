
const jsPsych = initJsPsych({
    on_finish: function(data) {
        proliferate.submit({"trials": data.values()});
    },
    show_progress_bar: true
});

let timeline = []
// push experiment logic the timeline here...
// ......

const consent = {
    // Which plugin to use
    type: jsPsychHtmlButtonResponse,
    // What should be displayed on the screen
    stimulus: '<p><font size="3">We invite you to participate in a research study on language comprehension. Your experimenter will ask you to do a linguistic task such as reading and matching sentences or pictures, or participating in a simple language game. <br><br>There are no risks or benefits of any kind involved in this study. <br><br>You will be paid for your participation at the posted rate.<br><br>If you have read this form and have decided to participate in this experiment, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at anytime without penalty or loss of benefits to which you are otherwise entitled. You have the right to refuse to do particular tasks. Your individual privacy will be maintained in all published and written data resulting from the study. You may print this form for your records.<br><br>CONTACT INFORMATION: If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, you should contact Bokun Li at (+44)-7536-477-858. <br><br>If you agree to participate, please proceed to the study tasks.</font></p>',
    // What should the button(s) say
    choices: ['Continue']
};

// push to the timeline
timeline.push(consent)

// the first sentence_picture_matching_task to calculate P(w|u)
const sentence_picture_matching_task = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "In this experiment, you will answer several sentence-picture-matching questions. In each question, you will see a sentence and several pictures and you have 100 coins to distribute. Please distribute the coins to the pictures you think properly match the meaning of the sentence. You can distrbiute different numbers of coins to multiple options. Try to respond as quickly and accurately as you can.<br>When you're ready to begin, press the space bar.",
    choices: [" "]
};

timeline.push(sentence_picture_matching_task);


// trials1 of temperature
const trials1 = {
    type: jsPsychSurveyHtmlForm,
    preamble:'<p>Context: Susan used a thermometer to measure water temperature and she said:<br>The water is warm.<br>Now please move the sliders and distribute coins to the options that show the water is warm.</p>',

    html:'<div style="float:left"><label for="10"><img src="./visual stimuli-exp/temperature/10.png"></label><br><input type="range" id="10" name="10" min="0" max="100"></div>            <div style="float:left"><label for="20"><img src="./visual stimuli-exp/temperature/20.png"></label><br><input type="range" id="20" name="20" min="0" max="100"></div>         <div style="float:left"><label for="30"><img src="./visual stimuli-exp/temperature/30.png"></label><br><input type="range" id="30" name="30" min="0" max="100"></div>            <div style="float:left"><label for="40"><img src="./visual stimuli-exp/temperature/40.png"></label><br><input type="range" id="40" name="40" min="0" max="100"></div>           <div style="float:left"><label for="50"><img src="./visual stimuli-exp/temperature/50.png"></label><br><input type="range" id="50" name="50" min="0" max="100"></div>          <div style="float:left"><label for="60"><img src="./visual stimuli-exp/temperature/60.png"></label><br><input type="range" id="60" name="60" min="0" max="100"></div>            <div style="float:left"><label for="70"><img src="./visual stimuli-exp/temperature/70.png"></label><br><input type="range" id="70" name="70" min="0" max="100"></div>         <div style="float:left"><label for="80"><img src="./visual stimuli-exp/temperature/80.png"></label><br><input type="range" id="80" name="80" min="0" max="100"></div>         <div style="float:left"><label for="90"><img src="./visual stimuli-exp/temperature/90.png"></label><br><input type="range" id="90" name="90" min="0" max="100"></div>',
    
    choices: ['Continue']
}
 timeline.push(trials1)


// the second picture_sentence_matching_task to calculate P(u|w)
const picture_sentence_matching_task = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "In this experiment, you will answer several picture-sentence-matching questions. In each question, you will see a picture and several sentences and you have 100 coins to distribute. Please distribute the coins to the sentences you think properly describe the meaning of the picture. You can distribute different numbers of coins to multiple options. Try to respond as quickly and accurately as you can.<br>When you're ready to begin, press the space bar.",
    choices: [" "]
}

timeline.push(picture_sentence_matching_task);


//traials 10 of temperature
const trials10 = {
    type: jsPsychSurveyHtmlForm,
    preamble:'<p>Context: Susan used a thermometer to measure water temperature and she saw the temperature below.<br>Please move the sliders and distribute coins to the options that match the description of image.<br><div style="float:left"><img src="./visual stimuli-exp/temperature/10.png"></div></p>',

    html:'<div style="margin-top:100px"><label for="warm">The water is warm.</label><input type="range" id="warm" name="warm" min="0" max="100"></div>         <div style="margin-top:100px"><label for="hot">The water is hot.</label><input type="range" id="hot" name="hot" min="0" max="100"></div>           <div style="margin-top:100px; margin-bottom: 100px"><label for="scalding">The water is scalding.</label><input type="range" id="scalding" name="scalding" min="0" max="100"></div>',

    choices:['Continue']
}
timeline.push(trials10)



jsPsych.run(timeline)


