export default class MobileMenu {
    constructor(options) {
        this.$el = options.$el;
        this.$toggles = options.$toggles;

        this.state = true;

        this.$toggles.forEach(el =>{
            el.addEventListener('click', () =>{
                this.ToggleMenu(this.state);
            })
        });

        document.addEventListener('click', event =>{
            event.stopPropagation();

            if (!this.$el.contains(event.target)){
                this.CloseMenu(this.state);
            }
        })
    }

    ToggleMenu(state){
        if (this.$el.classList.contains('mobile-menu--active')){
            this.CloseMenu(state);
        } else {
            this.OpenMenu(state)
        }

        setTimeout(() => {
            this.state = true;
        },500)
    }

    CloseMenu(state){
        if (state){
            this.state = false;
            this.$el.classList.remove('mobile-menu--active');

            document.body.removeAttribute('style');

            setTimeout(() => {
                this.state = true;
            },500)
        }
    }

    OpenMenu(state){
        if (state){
            this.state = false;
            this.$el.classList.add('mobile-menu--active');

            document.body.style.overflow = 'hidden';

            setTimeout(() => {
                this.state = true;
            },500)
        }
    }
}