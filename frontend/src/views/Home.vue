<template>
  <h1>
    Hello
  </h1>

  <h2>
    I am Luc (alias Luke_), a passionate full-stack web / business central software developer from the netherlands. 
  </h2>

  <br>

  <p>
    <b>Here are some quick facts about me:</b>
    <li>I mainly program in C#, VueJS, and AL</li>
    <li>I love coding, making/writing music, and playing VR</li>
    <li>I am currently {{ age }} years old</li>
  </p>

  <br />

  <p>
    <b>Links</b><br />
    <a href="https://github.com/justlucdewit/resume/blob/main/CV.pdf">Resume</a> | 
    <a href="mailto:luke@lukedev.nl">Email me</a>
  </p>

  <br />

  <p>
    <b>About me</b><br />
    I've always been curious about the world around me. Ever since I've touched my first computer, I've been wanting to find out how it and its applications worked.<br /><br />
    When I was 14 years old I started learning about how to write batch scripts and how to use them to create terminal based text adventure games on windows. From there I ended up shifting towards web development with HTML CSS and JavaScript. Later I also found out about programming outside of the browser, via languages like python and C.<br/><br />
    Since then, ive been expanding my skills and knowledge in this area and became really invested into the world of software development. The most important thing about it is not your skills, but your joy, when you practice something that you really enjoy, you automatically gain skill and expertise over time.<br /><br />
  </p>
</template>

<script>
export default {
    data: () => ({
        age: '',
    }),

    mounted() {
        // Every second, update age, and scrobble count
        setInterval(async  () => {
            // Im born at 30/07/2001 7 oclock in the evening, get age in years
            // include decimal places
            this.age = ((Date.now() - new Date(2001, 6, 30, 19, 0, 0)) / 1000 / 60 / 60 / 24 / 365).toFixed(8);
        }, 1000);
    }
}
</script>

<style>

</style>