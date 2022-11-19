<script>
import { ref } from "vue";
import Tooltip from "./Tooltip.vue";
export default {
    setup() {
        const FORM_ENDPOINT = ref("endpointUrl");
        const status = ref();
        function handleSubmit(e) {
            e.preventDefault();
            // Anything you need to inject dynamically
            const injectedData = {
                DYNAMIC_DATA_EXAMPLE: 123,
            };
            const inputs = e.target.elements;
            const data = {};
            inputs.forEach((inp) => {
                if (inp.name) {
                    data[inp.name] = inp.value;
                }
            });
            Object.assign(data, injectedData);
            fetch(FORM_ENDPOINT.value, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    // It's likely a spam/bot request, so bypass it to validate via captcha
                    if (response.status === 422) {
                        Object.keys(injectedData).forEach((key) => {
                            const el = document.createElement("input");
                            el.type = "hidden";
                            el.name = key;
                            el.value = injectedData[key];
                            e.target.appendChild(el);
                        });
                        e.target.submit();
                        throw new Error("Please finish the captcha challenge");
                    }
                    if (response.status !== 200) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then(() => (status.value = "We'll be in touch soon."))
                .catch((err) => (status.value = err.toString()));
        }
        return { status, handleSubmit, FORM_ENDPOINT };
    },
    // To Add Tailwind
    beforeCreate() {
        // if (document) {
        //     const stylesheet = document.createElement("link");
        //     stylesheet.rel = "stylesheet";
        //     stylesheet.href =
        //         "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";
        //     document.head.appendChild(stylesheet);
        // }
    },
    components: { Tooltip }
};

</script>
<template>
    <section class="pb-5 bg-gradient-light-reverse bb-3-dark-orange">
        <div class="container">
            <div class="app-advanced p-10">
                <form :action="FORM_ENDPOINT" @submit="handleSubmit" method="POST" target="_blank"
                    class="w-1/2 mx-auto mt-5">
                    <div class="mb-3 pt-0" >
                        <input type="text" placeholder="Your name" name="name" class="
              
                        px-3
              py-3
              text-dark-orange
              relative
              bg-white bg-white
              rounded
              text-sm
              border-0
              shadow
              outline-none
              focus:outline-none
              focus:ring
              w-full
            " required />
                        <Tooltip message="Write your name here so we can address you properly!" />

                    </div>
                    <div class="mb-3 pt-0">
                        <input type="email" placeholder="Email" name="email" class="
              px-3
              py-3
              text-dark-orange
              relative
              bg-white bg-white
              rounded
              text-sm
              border-0
              shadow
              outline-none
              focus:outline-none
              focus:ring
              w-full
            " required />
                        <Tooltip message="Write your email!" />
                    </div>
                    <div class="mb-3 pt-0" style=" display: inline-flex; vertical-align: middle; align-items: center;">
                        <div><textarea placeholder="Your message" name="message" class="
              px-3
              py-3
              text-dark-orange
              relative
              bg-white bg-white
              rounded
              text-sm
              border-0
              shadow
              focus:ring
              w-full
            " required /></div>
                        <Tooltip message="Write here your message, suggestions or concerns and we will contact you as soon as possible!" />
                    </div>
                    <div class="mb-3 pt-0">
                        <button class="btn" type="submit">
                            Send a message
                        </button>
                    </div>
                </form>
                <div v-if="status" class="text-center mt-10">
                    <h2 class="text-2xl">Thanks you!</h2>
                    <div class="text-md">{{ status }}</div>
                </div>
            </div>
        </div>
    </section>
</template>
  
  

<style scoped>
/* .input:focus-visible, */
.is-focused input,
 textarea:focus{
    outline: 2px solid rgb(243, 108, 36);
    border-radius: 3px;
}
.text-dark-orange {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}

.contactUs {}

input {}
</style>