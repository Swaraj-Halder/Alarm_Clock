 let hour;
        let minutes;
        let presentTime = function() {
            let time = new Date();

            hour = time.getHours();
            if(hour<=9) hour = "0"+hour

            minutes = time.getMinutes();
            if(minutes<=9) minutes = "0"+minutes

            let seconds = time.getSeconds();
            if(seconds<=9) seconds = "0"+seconds

            document.querySelector('.hh').innerHTML = hour;
            document.querySelector('.mm').innerHTML = minutes;
            document.querySelector('.ss').innerHTML = seconds;
        }
        const audio = new Audio("the_voyage_samsung.mp3");
        setInterval(presentTime,1)

        let set = document.querySelector('.set')
        let h;
        let m;

        set.addEventListener('click',()=>{
            h =  document.querySelector('.set-alarm form .hour').value;
            if(h <= 9) h = "0" + h
            m =  document.querySelector('.set-alarm form .minut').value;
            if(m <= 9) m = "0" + m

            let match;
            let alarm = function(){
                if(hour==h && minutes==m){
                    match=true;
                }
                if(match===true){
                    clearInterval(alarmReached)
                    audio.play()
                }
            }

            let alarmReached = setInterval(alarm,1)
        })

        let dismiss = document.querySelector('.stop')
        dismiss.addEventListener('click',()=>{
            audio.load();
        })
