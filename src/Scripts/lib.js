var Lib;
(function (Lib) {
    class AudioWrapper {
        constructor(volume) {
            this.audioElem = new Audio();
            this.audioElem.volume = volume;
        }
        PlaySound(path) {
            this.audioElem.src = path;
            this.audioElem.play();
        }
        StopSound() {
            this.audioElem.pause();
        }
        Volume(up) {
            if (up) {
                if (0.9 < this.audioElem.volume) {
                    this.audioElem.volume = 1;
                }
                else {
                    this.audioElem.volume += 0.1;
                }
            }
            else {
                if (this.audioElem.volume < 0.1) {
                    this.audioElem.volume = 0;
                }
                else {
                    this.audioElem.volume -= 0.1;
                }
            }
        }
    }
    Lib.AudioWrapper = AudioWrapper;
    class Decorator {
        static toggleColor(selector) {
            $(selector).css("background-color", "grey");
            setTimeout(() => {
                $(selector).css("background-color", "white");
            }, 80);
        }
    }
    Lib.Decorator = Decorator;
    class AudioInitializer {
        static init() {
            $(document).on("keydown", event => {
                console.log(event.keyCode);
                const audio = new Lib.AudioWrapper(Number($(".volume-value").html()));
                switch (event.keyCode) {
                    case 66://b
                        audio.PlaySound("Contents/Sounds/Kick08.wav");
                        Decorator.toggleColor(".drum-part-left-pedal");
                        break;
                    case 72://h
                        audio.PlaySound("Contents/Sounds/Kick08.wav");
                        Decorator.toggleColor(".drum-part-right-pedal");
                        break;
                    case 32://space
                        audio.PlaySound("Contents/Sounds/Crash Cymbal-R06.wav");
                        Decorator.toggleColor(".drum-part-crash");
                        break;
                    case 65://a
                        audio.PlaySound("Contents/Sounds/OHH Edge03.wav");
                        Decorator.toggleColor(".drum-part-highhat");
                        break;
                    case 88://x
                        audio.PlaySound("Contents/Sounds/Snare OR07.wav");
                        Decorator.toggleColor(".drum-part-snare");
                        break;
                    case 86://v
                        audio.PlaySound("Contents/Sounds/Snare OR07.wav");
                        Decorator.toggleColor(".drum-part-snare");
                        break;
                    case 90: //z
                    case 67://c
                        audio.PlaySound("Contents/Sounds/CHH Edge06.wav");
                        Decorator.toggleColor(".drum-part-highhat");
                        break;
                    case 16://shift
                        audio.PlaySound("Contents/Sounds/China Cymbal04.wav");
                        Decorator.toggleColor(".drum-part-china");
                        break;
                    case 84: //t
                    case 71://g
                        audio.PlaySound("Contents/Sounds/Floor Tom09.wav");
                        Decorator.toggleColor(".drum-part-low-tom");
                        break;
                    case 70: //f
                    case 82://r
                        audio.PlaySound("Contents/Sounds/Mid Tom05.wav");
                        Decorator.toggleColor(".drum-part-middle-tom");
                        break;
                    case 68: //d
                    case 69://e
                        audio.PlaySound("Contents/Sounds/High Tom08.wav");
                        Decorator.toggleColor(".drum-part-high-tom");
                        break;
                    case 83://s
                        audio.PlaySound("Contents/Sounds/Ride Cymbal-Tip05.wav");
                        Decorator.toggleColor(".drum-part-middle-tom");
                        break;
                }
            }).on("input", ".volume-slider", event => {
                $(".volume-value").html($(event.currentTarget).val().toString());
            }).on("click", "#checkbox-show-key", event => {
                $(".label-asign").toggleClass("app-hidden");
            });
        }
    }
    Lib.AudioInitializer = AudioInitializer;
})(Lib || (Lib = {}));
//# sourceMappingURL=lib.js.map