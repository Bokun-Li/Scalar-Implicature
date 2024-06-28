
var n_trials = 18

const jsPsych = initJsPsych({
    on_finish: function(data) {
        var vals = data.values()
        // check if the participant went through the experiment
        // or exited it during the consent forms
        if (vals.length > n_trials){
            // Transmit data to Proliferate
            proliferate.submit({"trials": data.values()});
        };

    },
    show_progress_bar: true,
    auto_update_progress_bar: false
});


let timeline = []
// push experiment logic the timeline here...
// ......

//Define first part of consent form
const consent1 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class="consent-form"><p><img src="consent_header.png"></p>' +
    '<p style="text-align:center;font-weight:bold;">ONLINE INFORMATION SHEET</p>' +
    '<p><strong>Title of Project</strong>: The cognitive basis of pragmatic inferences</p>' +
    '<p>This study has been approved by the RD Ethics Chair as LING-2021-01-21</p><p>&nbsp;</p>' +
    '<p><strong>Name, Address and Contact Details of Principal Investigator:</strong></p>' +
    '<p>' +
    'Richard Breheny (<a href="mailto:r.breheny@ucl.ac.uk">r.breheny@ucl.ac.uk</a>)<br>UCL Linguistics<br>Division of Psychology and Language Sciences<br>Chandler House<br>2 Wakefield Street<br>London WC1N 1PF</p><p>&nbsp;</p>' +
    '<p><strong>Other investigators:</strong></p>' +
    '<p>Sebastian Schuster, Bokun Li</p>' +
    '<p>&nbsp;</p>' +
    '<p>We would like to invite you to participate in this research project. You should only participate if you want to. Choosing not to take part will not disadvantage you in any way. Before you decide whether you want to take part, please read the following information carefully. Please contact us if there is anything that is not clear or if you would like more information (<a href="mailto:s.schuster@ucl.ac.uk">s.schuster@ucl.ac.uk</a>).</p>' +
    '<p>&nbsp;</p>' +
    '<p><strong>Details of Study</strong></p>' +
    "<p>This study forms part of a research project under the supervision of Professor Richard Breheny in the Linguistics Department of the UCL Division of Psychology and Language Sciences which looks at how people process language. The study addresses the question of how people read more into communication than the actual words say. We will record participants' responses and responses may be timed.</p>" +
    '<p>&nbsp;</p>' +
    '<p><strong>Possible risks and benefits</strong></p>' +
    '<p>The testing session will take approximately <strong>15 minutes</strong> (including breaks). You are free to withdraw from the experiment at any time.  Once you have completed the experiment, you will be redirected to the recruitment platform you used to access our study, and you will be compensated for your time.</p>' +
    '<p>It is up to you to decide whether or not to take part. If you do decide to take part, you will be asked to provide an informed consent. Even after agreeing to take part, you can still withdraw at any time and without giving a reason.</p>' +
    '<p>All data are collected and stored in accordance with the provisions of the General Data Protection Regulations and the Data Protection Act 2018.</p><p>&nbsp;</p></div>',
    choices: ['Leave the study', 'Continue'],
    button_html: '<button class="jspsych-btn" style="transform: none; position: relative;  left:auto; bottom: auto;">%choice%</button>',
    on_finish: function(data) {
      if (data.response == "0") {
        jsPsych.endExperiment('Please return this study and close this window! Thank you for your interest.');
      }
    }

};

timeline.push(consent1);

// Define second part of consent form
const consent2 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class="consent-form"><p><img src="consent_header.png"></p>' +
    '<p style="text-align:center;font-weight:bold;">ONLINE CONSENT FORM</p>' +
    '<p><strong>Title of Project</strong>: The cognitive basis of pragmatic inferences</p>' +
    '<p>This study forms part of a research project under the supervision of Professor Richard Breheny in the Linguistics Department of the UCL Division of Psychology and Language Sciences. This study has been approved by the RD Ethics Chair as LING-2021-01-21</p>' +
    '<p>Please read the following information carefully:</p>' +
    '<ul>' +
    '<li>You have read and understood the information sheet explaining the project, risks and benefits.</li>' +
    '<li>You understand that you have the right to withdraw at any point during the study, for any reason, and without any prejudice.</li>' +
    '<li>You understand that you must not participate if you suffer from photosensitive epilepsy.</li>' +
    '<li>You consent to the processing of the anonymised data collected for the purposes of this study only and not for any other purposes.</li>' +
    '<li>You consent to the processing of the anonymised data collected for the purposes of this study only and not for any other purposes.</li>' +
    '<li>All data are collected and stored in accordance with the provisions of the General Data Protection Regulations and the Data Protection Act 2018. If you are concerned about how the data is being processed, please contact UCL in the first instance at data-protection@ucl.ac.uk</li>' +
    '</ul>' +
    '<p>If you would like to contact the Principal Investigator in the study to discuss this research, please e-mail <a href="mailto:r.breheny@ucl.ac.uk">r.breheny@ucl.ac.uk</a>.</p><p>&nbsp;</p></div>',
    choices: ['I do NOT consent (leave)', 'I consent (continue)'],
    button_html: '<button class="jspsych-btn" style="transform: none; position: relative;  left:auto; bottom: auto;">%choice%</button>',
    on_finish: function(data) {
      if (data.response == "0") {
        jsPsych.endExperiment('Please return this study and close this window! Thank you for your interest.');
      }
    }
};

timeline.push(consent2);


// the utterance_picture_matching_task to calculate P(w|u) [trials of interpretation]（改 text instruction）
const utterance_picture_matching_task = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "In this experiment, you will see several scenes and answer questions about them. On each slide, you will see a picture and several utterances. Please move the sliders for each utterance to indicate how likely you think it is that the speaker would say this.<br>Note: The ratings must add up to 100 and the sliders will automatically snap back if you try to assign more than 100 points.<br>The experiment is conducted in fullscreen mode. When you're ready to begin, please press the space bar.",
    choices: [" "]
}

timeline.push(utterance_picture_matching_task);

// Enter fullscreen mode
const enter_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: true
}

timeline.push(enter_fullscreen);



// Introduction of temperature trials (改 text instruction)
const intro_temperature = {
    type:jsPsychHtmlButtonResponse,
    stimulus: '<p>The experiment is divided into three parts. In the first part, you will see a similar scene as the one presented below. In each scene, the person on the left is waiting for some hot water for a cup of tea and asks the waiter whether the water is ready. The waiter checks the temperature on the thermometer before responding.</p><div><img src="./visual stimuli-exp/temperature/visualized_temperature_context/visualized_warm.png" height = "450"></div>',
    prompt: '<p>If you have understood the example scene, please click the button and the first task will begin.</p>',
    choices: ['Continue']
}

timeline.push(intro_temperature);

//trials of temperature
const trial_of_temperature = {
    type: jsPsychHtmlCoinBettingResponse,
    stimulus: jsPsych.timelineVariable('temperature'),
    images:[
        "./visual stimuli-exp/temperature/adjusted_temperature/10.png",
        "./visual stimuli-exp/temperature/adjusted_temperature/20.png",
        "./visual stimuli-exp/temperature/adjusted_temperature/30.png",
        "./visual stimuli-exp/temperature/adjusted_temperature/40.png",
        "./visual stimuli-exp/temperature/adjusted_temperature/50.png",
        "./visual stimuli-exp/temperature/adjusted_temperature/60.png",
        "./visual stimuli-exp/temperature/adjusted_temperature/70.png",
        "./visual stimuli-exp/temperature/adjusted_temperature/80.png",
        "./visual stimuli-exp/temperature/adjusted_temperature/90.png",
    ],

    // The parameter of controlling progress bar
    on_finish: function(){
        // at the end of each trial, update the progress bar
        // based on the current value and the proportion to update for each trial
        var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
    }
}
const temperature_procedure = {
    timeline: [trial_of_temperature],
    timeline_variables: [
        {temperature:'<div><img src="./visual stimuli-exp/temperature/visualized_temperature_context/visualized_warm.png" height = "270"></div><p style="margin: 8px 0px;">Which thermometer do you think show the water temperature? Use the "+" and "&ndash;" buttons to distribute 10 coins across the likely thermometers.</p>'},
        {temperature:'<div><img src="./visual stimuli-exp/temperature/visualized_temperature_context/visualized_hot.png" height = "270"></div><p style="margin: 8px 0px;">Which thermometer do you think show the water temperature? Use the "+" and "&ndash;" buttons to distribute 10 coins across the likely thermometers.</p>'},
        {temperature:'<div><img src="./visual stimuli-exp/temperature/visualized_temperature_context/visualized_scalding.png" height = "270"></div><p style="margin: 8px 0px;">Which thermometer do you think show the water temperature? Use the "+" and "&ndash;" buttons to distribute 10 coins across the likely thermometers.</p>'},
    ],
    randomize_order: true,
    repetitions: 2
}

timeline.push(temperature_procedure);



// Introduction of grade trials (改 text instruction)
const intro_grade = {
    type:jsPsychHtmlButtonResponse,
    stimulus: "<p>Congratulations! You have completed the first part. In the second part, you will see scenes similar to the one presented below. In each scene, the boy on the left is wondering about Jack's academic performance but he hasn't seen any of Jack's test results. The girl on the right answers based on Jack's most recent test results, which are shown in the middle.</p><div><img src='./visual stimuli-exp/grades/visualized_grades_context/visualized_good.png' height = '450'></div>",
    prompt: '<p>If you have understood the example scene, please click the button and the second task will begin.</p>',
    choices: ['Continue']
}

timeline.push(intro_grade);

//trials of grade
const trial_of_grade={
    type: jsPsychHtmlCoinBettingResponse,
    stimulus: jsPsych.timelineVariable('mark'),
    images:[
        "./visual stimuli-exp/grades/adjusted_grades/30_wrong.png",
        "./visual stimuli-exp/grades/adjusted_grades/13_wrong.png",
        "./visual stimuli-exp/grades/adjusted_grades/11_wrong.png",
        "./visual stimuli-exp/grades/adjusted_grades/9_wrong.png",
        "./visual stimuli-exp/grades/adjusted_grades/7_wrong.png",
        "./visual stimuli-exp/grades/adjusted_grades/5_wrong.png",
        "./visual stimuli-exp/grades/adjusted_grades/3_wrong.png",
        "./visual stimuli-exp/grades/adjusted_grades/1_wrong.png",
        "./visual stimuli-exp/grades/adjusted_grades/0_wrong.png",
    ],

    // parameter of controlling progress bar
    on_finish: function(){
        var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
    }
}
const grade_procedure = {
    timeline: [trial_of_grade],
    timeline_variables: [
        {mark:'<div><img src="./visual stimuli-exp/grades/visualized_grades_context/visualized_good.png" height = "330"></div><p style="margin: 8px 0px;">Which examination sheet do you think is on the desk? Use the "+" and "&ndash;" buttons to distribute 10 coins across the likely examination sheets.</p>'},
        {mark:'<div><img src="./visual stimuli-exp/grades/visualized_grades_context/visualized_excellent.png" height = "330"></div><p style="margin: 8px 0px;">Which examination sheet do you think is on the desk? Use the "+" and "&ndash;" buttons to distribute 10 coins across the likely examination sheets.</p>'},
        {mark:'<div><img src="./visual stimuli-exp/grades/visualized_grades_context/visualized_perfect.png" height = "330"></div><p style="margin: 8px 0px;">Which examination sheet do you think is on the desk? Use the "+" and "&ndash;" buttons to distribute 10 coins across the likely examination sheets.</p>'},
    ],
    randomize_order: true,
    repetitions: 2
}

timeline.push(grade_procedure);


// Introduction of cleanness trials (改 text instruction)
const intro_cleanness = {
    type:jsPsychHtmlButtonResponse,
    stimulus: "<p>Congratulations! You have completed the second task. In the third part, you will see scenes similar to the one presented below. In each scene, the woman on the left is managing several buildings and needs to know whether the windows of one of the buildings need to be cleaned. She calls her colleague who works in that building to ask him about the state of the windows.</p><div><img src='./visual stimuli-exp/clean/visualized_cleaness_context/visualized_cleanish.png' height = '450'></div>",
    prompt: '<p>If you have understood the example scene, please click the button and the third task will begin.</p>',
    choices: ['Continue']
}

timeline.push(intro_cleanness);

//trials of cleanness
const trial_of_cleanness = {
    type: jsPsychHtmlCoinBettingResponse,
    stimulus: jsPsych.timelineVariable('cleanness'),
    images:[
        "./visual stimuli-exp/clean/adjusted_cleaness/100-dirty.png",
        "./visual stimuli-exp/clean/adjusted_cleaness/60-dirty-with-spots.png",
        "./visual stimuli-exp/clean/adjusted_cleaness/45-dirty-with-spots.png",
        "./visual stimuli-exp/clean/adjusted_cleaness/30-clean.png",
        "./visual stimuli-exp/clean/adjusted_cleaness/15-clean.png",
        "./visual stimuli-exp/clean/adjusted_cleaness/0-clean-spotless.png",
        "./visual stimuli-exp/clean/adjusted_cleaness/0-spotless.png",
        "./visual stimuli-exp/clean/adjusted_cleaness/0-spotless-light-2.png",
        "./visual stimuli-exp/clean/adjusted_cleaness/0-spotless-light-4.png",
    ],

    // parameter of controlling progress bar
    on_finish: function(){
        var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(curr_progress_bar_value + (1/n_trials));
    }
}

const cleanness_procedure = {
    timeline: [trial_of_cleanness],
    timeline_variables: [
        {cleanness:'<div><img src="./visual stimuli-exp/clean/visualized_cleaness_context/visualized_cleanish.png" height = "310"></div><p style="margin: 8px 0px;">Which windows do you think are on the wall? Use the "+" and "&ndash;" buttons to distribute 10 coins across the likely windows.</p>'},
        {cleanness:'<div><img src="./visual stimuli-exp/clean/visualized_cleaness_context/visualized_clean.png" height = "310"></div><p style="margin: 8px 0px;">Which windows do you think are on the wall? Use the "+" and "&ndash;" buttons to distribute 10 coins across the likely windows.</p>'},
        {cleanness:'<div><img src="./visual stimuli-exp/clean/visualized_cleaness_context/visualized_spotless.png" height = "310"></div><p style="margin: 8px 0px;">Which windows do you think are on the wall? Use the "+" and "&ndash;" buttons to distribute 10 coins across the likely windows.</p>'},
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

//The ending comment box
const commentbox = {
    type: jsPsychSurveyText,
    questions: [
        {prompt: '<p style = "font-size: 20px;">If you encountered any technical difficulties, found anything odd, or if you have any other comments about the experiment that you would like to share with us, please type them in the box below:</p>', name: 'Comment', rows: 10, columns: 80}
    ],
    button_label: 'End'
}

timeline.push(commentbox);

//Reminder: The end of the language experiment
const end_of_experiment = {
    type:jsPsychHtmlKeyboardResponse,
    stimulus:'<p style = "font-size: 25px;">Thank you for your participation.<br>This is the end of the experiment and you will now be redirected to Prolific.</p>',
    trial_duration: 2000,
    choices:[' ']
}

timeline.push(end_of_experiment);


jsPsych.run(timeline)

