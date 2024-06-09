
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
    stimulus: '<p><font size="3">We invite you to participate in a research study on language comprehension. Your experiment will ask you to do a linguistic task such as reading and matching sentences or pictures, or participating in a simple language game. <br><br>There are no risks or benefits of any kind involved in this study. <br><br>You will be paid for your participation at the posted rate.<br><br>If you have read this form and have decided to participate in this experiment, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at anytime without penalty or loss of benefits to which you are otherwise entitled. You have the right to refuse to do particular tasks. Your individual privacy will be maintained in all published and written data resulting from the study. You may print this form for your records.<br><br>CONTACT INFORMATION: If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, you should contact Bokun Li at (+44)-7536-477-858. <br><br>If you agree to participate, please proceed to the study tasks.</font></p>',
    // What should the button(s) say
    choices: ['Continue']
}

// push to the timeline
timeline.push(consent);

// the picture_sentence_matching_task to calculate P(u|w) [trials of production]
const picture_sentence_matching_task = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "In this experiment, you will answer several picture-sentence-matching questions. In each question, you will see a picture and several utterances. Please move the sliders for each utterance to represent its possibility of being said in the picture. Make sure the sum of possibilities is 100. Try to respond as quickly and accurately as you can.<br>When you're ready to begin, press the space bar.",
    choices: [" "]
}

timeline.push(picture_sentence_matching_task);

// Enter fullscreen mode
const enter_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: true
}

timeline.push(enter_fullscreen);

//trials of temperature
const trial_of_temperature = {
    type: jsPsychHtmlMultiSliderResponse,
    stimulus: jsPsych.timelineVariable('temperature'),
    num_sliders: 4,
    force_total: 100,
    slider_labels: ["It is warm", "It is hot", "It is scalding", "Something else"],
    slider_width: 800
}
const temperature_procedure = {
    timeline: [trial_of_temperature],
    timeline_variables: [
        {temperature:'<div><img src="./visual stimuli-exp/temperature/10degree.png" height = "450"></div><p>How likely do you think the waiter will respond with each of the utterances below?</p>'},
        {temperature:'<div><img src="./visual stimuli-exp/temperature/20degree.png" height = "450"></div><p>How likely do you think the waiter will respond with each of the utterances below?</p>'},
        {temperature:'<div><img src="./visual stimuli-exp/temperature/30degree.png" height = "450"></div><p>How likely do you think the waiter will respond with each of the utterances below?</p>'},
        {temperature:'<div><img src="./visual stimuli-exp/temperature/40degree.png" height = "450"></div><p>How likely do you think the waiter will respond with each of the utterances below?</p>'},
        {temperature:'<div><img src="./visual stimuli-exp/temperature/50degree.png" height = "450"></div><p>How likely do you think the waiter will respond with each of the utterances below?</p>'},
        {temperature:'<div><img src="./visual stimuli-exp/temperature/60degree.png" height = "450"></div><p>How likely do you think the waiter will respond with each of the utterances below?</p>'},
        {temperature:'<div><img src="./visual stimuli-exp/temperature/70degree.png" height = "450"></div><p>How likely do you think the waiter will respond with each of the utterances below?</p>'},
        {temperature:'<div><img src="./visual stimuli-exp/temperature/80degree.png" height = "450"></div><p>How likely do you think the waiter will respond with each of the utterances below?</p>'},
        {temperature:'<div><img src="./visual stimuli-exp/temperature/90degree.png" height = "450"></div><p>How likely do you think the waiter will respond with each of the utterances below?</p>'},
    ],
    randomize_order: true,
    repetitions: 2
}

timeline.push(temperature_procedure);

//trials of grade
const trial_of_grade={
    type: jsPsychHtmlMultiSliderResponse,
    stimulus: jsPsych.timelineVariable('mark'),
    num_sliders: 4,
    force_total: 100,
    slider_labels: ["He is a good student", "He is an excellent student", "He is a perfect student", "Something else"],
    slider_width: 800
}
const grade_procedure = {
    timeline: [trial_of_grade],
    timeline_variables: [
        {mark:'<div><img src="./visual stimuli-exp/grades/30wrong.png" height = "450"></div><p>How likely do you think the girl will respond with each of the utterances below?</p>'},
        {mark:'<div><img src="./visual stimuli-exp/grades/13wrong.png" height = "450"></div><p>How likely do you think the girl will respond with each of the utterances below?</p>'},
        {mark:'<div><img src="./visual stimuli-exp/grades/11wrong.png" height = "450"></div><p>How likely do you think the girl will respond with each of the utterances below?</p>'},
        {mark:'<div><img src="./visual stimuli-exp/grades/9wrong.png" height = "450"></div><p>How likely do you think the girl will respond with each of the utterances below?</p>'},
        {mark:'<div><img src="./visual stimuli-exp/grades/7wrong.png" height = "450"></div><p>How likely do you think the girl will respond with each of the utterances below?</p>'},
        {mark:'<div><img src="./visual stimuli-exp/grades/5wrong.png" height = "450"></div><p>How likely do you think the girl will respond with each of the utterances below?</p>'},
        {mark:'<div><img src="./visual stimuli-exp/grades/3wrong.png" height = "450"></div><p>How likely do you think the girl will respond with each of the utterances below?</p>'},
        {mark:'<div><img src="./visual stimuli-exp/grades/1wrong.png" height = "450"></div><p>How likely do you think the girl will respond with each of the utterances below?</p>'},
        {mark:'<div><img src="./visual stimuli-exp/grades/0wrong.png" height = "450"></div><p>How likely do you think the girl will respond with each of the utterances below?</p>'},
    ],
    randomize_order: true,
    repetitions: 2
}

timeline.push(grade_procedure);

//trials of cleanness
const trial_of_cleanness = {
    type: jsPsychHtmlMultiSliderResponse,
    stimulus: jsPsych.timelineVariable('cleanness'),
    num_sliders: 4,
    force_total: 100,
    slider_labels: ["They are cleanish", "They are clean", "They are spotless", "Something else"],
    slider_width: 800
}
const cleanness_procedure = {
    timeline: [trial_of_cleanness],
    timeline_variables: [
        {cleanness:'<div><img src="./visual stimuli-exp/clean/100dirty.png" height = "450"></div><p>How likely do you think the man will respond with each of the utterances below?</p>'},
        {cleanness:'<div><img src="./visual stimuli-exp/clean/60dirty.png" height = "450"></div><p>How likely do you think the man will respond with each of the utterances below?</p>'},
        {cleanness:'<div><img src="./visual stimuli-exp/clean/45dirty.png" height = "450"></div><p>How likely do you think the man will respond with each of the utterances below?</p>'},
        {cleanness:'<div><img src="./visual stimuli-exp/clean/30clean.png" height = "450"></div><p>How likely do you think the man will respond with each of the utterances below?</p>'},
        {cleanness:'<div><img src="./visual stimuli-exp/clean/15clean.png" height = "450"></div><p>How likely do you think the man will respond with each of the utterances below?</p>'},
        {cleanness:'<div><img src="./visual stimuli-exp/clean/0clean-or-spotless.png" height = "450"></div><p>How likely do you think the man will respond with each of the utterances below?</p>'},
        {cleanness:'<div><img src="./visual stimuli-exp/clean/0spotless.png" height = "450"></div><p>How likely do you think the man will respond with each of the utterances below?</p>'},
        {cleanness:'<div><img src="./visual stimuli-exp/clean/0spotless-light2.png" height = "450"></div><p>How likely do you think the man will respond with each of the utterances below?</p>'},
        {cleanness:'<div><img src="./visual stimuli-exp/clean/0spotless-light4.png" height = "450"></div><p>How likely do you think the man will respond with each of the utterances below?</p>'},
    ],
    randomize_order: true,
    repetitions: 2
}

timeline.push(cleanness_procedure);

//Exit fullscreen mode
const exit_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: false
}

timeline.push(exit_fullscreen);

jsPsych.run(timeline)


