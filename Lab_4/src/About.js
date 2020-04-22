const AboutPage = {
    async render() {
        const bt1 = document.getElementById("button1")
        const bt2 = document.getElementById("button2")
        bt1.classList.add('chosen') & bt2.classList.remove('chosen');

        const view = `
            <h2 id="page-title" class="spa-title" style="font-size: 28pt">About</h2>
            <div class="wrapper" style="display: inline-flex; justify-content: center">
                <img src="./img/pic.png" style="width: 200px; height: 200px; border-radius : 50%; border: solid 2px">
                <div class="wrapper2" style="display: block;">
                    <ul style="list-style-type: none; padding-inline-start: 60px; font-size: 15pt;">
                        <li style="margin-bottom: 15px"><b>First Name: </b></b><span style="margin-left: 20px;">Sergei</span></li>
                        <li style="margin-bottom: 15px"><b>Last Name: </b><span style="margin-left: 23px;">Vlad</span></li>
                        <li style="margin-bottom: 15px"><b>Group: </b><span style="margin-left: 61px;">M3307</span></li>
                        <li style="margin-bottom: 15px"><b>Age: </b><span style="margin-left: 87px;">21</span></li>
                    </ul>
                </div>
            </div>
        `
        return view;
    },

    async after_render() {}
}

export default AboutPage;