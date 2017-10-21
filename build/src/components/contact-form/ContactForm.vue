<template lang="html">
    <div>
        <div id="email-form-section" v-if="!successEmail">
            <div class="container">
                <div class="email-container-template">
                    <form id="gform" method="POST" action="https://script.google.com/macros/s/AKfycbwD5elmvMSDRZrRcEDPmlle-wdoYaULCxJz4fdd_Fl401GbuzE/exec">
                        Name:
                        <input type="text" name="name" v-model="name">
                        <div id="email-invalid" style="display: none; color: red;">Email is invalid</div>
                        Email:
                        <input type="email" name="email" v-model="email">
                        Contact Number:
                        <input type="text" name="contact_no" v-model="contactNumber">
                        Subject:
                        <input type="text" name="subject" v-model="subject">
                        Message:
                        <textarea name="message" v-model="message"></textarea>
                        <input class="submit-btn" type="submit" value="Send">
                    </form>


                </div>
            </div>

        </div>
        <div style="display:none;" id="thankyou_message" class="success-email">
            <h1>Thank you, {{this.name}}!</h1>
            You message has been sent and We'll get back to you shortly.
            <router-link to="/">Click here to go home?</router-link>
      </div>
        <!-- <div class="success-email" v-if="successEmail">

        </div> -->
    </div>
</template>

<script>

export default {
    data() {
        return {
            name: '',
            email: '',
            contactNumber: '',
            subject: '',
            message: '',
            successEmail: false
        }
    },
    methods: {
    },
    mounted() {
        document.title = 'Redscope | Contact'
        // using SendGrid's v3 Node.js Library
        // https://github.com/sendgrid/sendgrid-nodejs

        function loaded() {
          console.log('contact form submission handler loaded successfully');
          // bind to the submit event of our form
          var form = document.getElementById('gform');
          form.addEventListener("submit", handleFormSubmit, false);
        };
        document.addEventListener('DOMContentLoaded', loaded, false);

        loaded()
    }
}
</script>

<style lang="scss">
$mobile: 560px;
$tablet: 820px;
$desktop: 1024px;
#hero-section {
    .icon-letter-container {
        position: absolute;
        width: 320px;
        height: 450px;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        // top: -100px;
        // left: -40%;
        top: 0;
        left: 0;
        text-align: center;
    }
    .letter-c-icon {

        position: relative;
        top: 9px;
        left: 0;
        z-index: 20;
        width: 160px;
        height: 200px;
        right: 0;
        text-align: center;
        position: relative;
        margin: 0 auto;
    }
    .letter-c-bg {
        position: absolute;
        left: 91px;
        width: 154px;
        z-index: 19;
        height: 163px;
    }
    @media (min-width: $tablet) {

        .icon-letter-container {
            top: 50px;
            left: -50%;
            .letter-c-bg {
                width: 300px;
                z-index: 19;
                height: 298px;
                left: 0;
            }
            .letter-c-icon {
                width: 270px;
                height: 340px;
            }
        }
    }
}

.contact-hero {
    background: #151515 !important;
    a {
        text-decoration: none;
        color: #fff;
        text-align: center;
    }
    p {
        text-align: center;
    }
    h1 {
        color: #606060;
        text-align: center;
        text-decoration: none;
        font-size: 30px;
        font-family: 'Fira Sans', sans-serif;
        position: relative;
        left: -20px;
        margin-bottom: 20px;
    }
    @media (min-width: $mobile) {
        h1 {
            font-size: 40px;
        }
        .icon-column {
            text-align: center;
            a {
                text-align: center;
            }
        }
    }
    @media (min-width: $tablet) {
        h1 {
            font-size: 50px;
        }
        .icon-column {
            text-align: left;
        }
    }
    .icons {
        width: 20px;
        height: 20px;
        position: relative;
        margin-left: -20px;

    }
    .icon-pin {
        top: 4px;
        right: 6px;
    }
    .icon-email {
        right: 10px;
        top: 5px;
    }
    .icon-phone {
        right: 10px;
        top: 5px;
    }
    .email-container {
        padding: 230px 0;
        max-width: 780px;
        margin: 0 auto;

        color: #fff;
        position: relative;
        z-index: 30;
        .container {
            max-width: 520px;
        }
        .social-media-menu {
            text-align: center;

            a img {
                width: 40px;
                display: inline-block;
                margin: 20px 10px 0;
            }
        }
    }
    @media (min-width: $tablet) {
        .email-container {
            padding-left: 130px;
            .container {
                max-width: 520px;
                margin-right: 0;
            }
        }
    }

}
#email-form-section {
    padding: 100px 0;
    background: #f2f2f2;

    .container {
        max-width: 590px;
    }
    .email-container-template {
        background: #FFF;
        z-index: 200;
        position: relative;
        padding: 30px;
        font-family: 'Fira Sans', sans-serif;
        -webkit-box-shadow: 0 5px 17px 2px rgba(0,0,0,0.23);
        -moz-box-shadow: 0 5px 17px 2px rgba(0,0,0,0.23);
        box-shadow: 0 5px 17px 2px rgba(0,0,0,0.23);

        input {
            border-radius: 0;
            display: block;
            width: 100%;
            margin-bottom: 10px;
            background: #e5e5e5;
            border: none;
        }
        textarea {
            border-radius: 0;
            display: block;
            width: 100%;
            margin-bottom: 10px;
            height: 100px;
            margin-top: 0;
            background: #e5e5e5;
            border: none;
        }

        .submit-btn {
            background: #c1161c;
            width: 200px;
            margin-right: 0;
            margin-left: auto;
            position: relative;
            color: #fff;
        }
    }
}

.success-email {
    padding: 10em 0;
    text-align: center;
    background: #f5f5f5;
    a {
        color: #db1e26;
        text-decoration: none;
        display: block;
    }
}
</style>
