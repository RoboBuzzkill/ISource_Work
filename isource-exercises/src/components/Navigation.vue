<template>
  <header :class="{'scrolled-nav' : scrollPosition}">
    <nav>
        <div class="branding">
            <img src="@/assets/logo.png" alt="">
        </div>
        <ul v-show="!mobile" class="navigation">
            <li><router-link class="link" :to="{name: 'home'}">Home</router-link></li>
            <li><router-link class="link" :to="{name: 'practice'}">Practice</router-link></li>
            <li><router-link class="link" :to="{name: 'matchgame'}">Matchgame</router-link></li>
            <li><router-link class="link" :to="{name: 'calendar'}">Calendar</router-link></li>
        </ul>
        <div class="icon">
            <i @click="toggleMobileNav" v-show="mobile" class="fa fa-bars" :class="{'icon-active' : mobileNav}"></i>
        </div>
        <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav">
            <li><router-link class="link" :to="{name: 'home'}">Home</router-link></li>
            <li><router-link class="link" :to="{name: 'practice'}">Practice</router-link></li>
            <li><router-link class="link" :to="{name: 'matchgame'}">Matchgame</router-link></li>
            <li><router-link class="link" :to="{name: 'calendar'}">Calendar</router-link></li>
        </ul>
        </transition>
    </nav>
  </header>
</template>

<script>
export default {
    name: "navigation",
    data(){
        return{
            scrollPosition: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        }
    },
    created(){
        window.addEventListener('resize', this.checkScreen)
        this.checkScreen();
    },
    methods: {
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav;
        },

        checkScreen(){
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 768){
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        }
    }
}
</script>

<style lang="scss" scoped>

header{
    position: relative;
    background-color: rgb(65, 65, 65);
    z-index: 99;
    width: 100%;
    transition: 0.5s ease all;
    color: #fff;

    nav{
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px){
        max-width: 1140px;
        }

        ul,
        .link{
            font-weight: 500;
            color: #fff;
            list-style: none;
            text-decoration: none;
        }

        li{
            text-transform: uppercase;
            padding: 16px;
            margin-left: 16px;
        }

        .link{
            font-size: 14px;
            transform: .5s ease all;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;

            &:hover{
                color: #41b883;
                border-color: #41b883;
            }
        }

        .branding{
            display: flex;
            align-items: center;

            img{
                width: 50px;
                transition: .5s ease all;
            }
        }

        .navigation{
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }

        .icon{
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            right: 24px;
            height: 100%;

            i {
                cursor: pointer;
                font-size: 24px;
                transition: 0.8s ease all;
            }
        }

        .icon-active{
            transform: rotate(180deg);
        }

        .dropdown-nav{
            display: flex;
            flex-direction: column;
            position: fixed;
            z-index: 1;
            width: 100%;
            max-width: 250px;
            height: 100%;
            background-color: #6f6f6f;
            top: 0;
            left: 0;

            li{
                margin-left: -31px;
                border-bottom: 2px solid #41b883;
                .link{
                    color: #000;
                    &:hover{
                        color: #41b883;
                        text-decoration: none;
                        border-bottom: none;
                    }
                }
            }
        }

        .mobile-nav-enter-active,
        .mobile-nav-leave-active{
            transition: 1s ease all;
        }

        .mobile-nav-enter-from,
        .mobile-nav-leave-to{
            transform: translate(-250px);
        }

        .mobile-nav-enter-to{
            transform: translateX(0);
        }
    }
}


</style>