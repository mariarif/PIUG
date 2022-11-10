<script>

</script>
<template>
    <div class="contactUs">
        <!-- <form>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail"
                        value="email@example.com">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword">
                </div>
            </div>
        </form> -->
        <section class="border p-4 d-flex justify-content-center mb-4">
            <form id="form" class="text-center" style="width: 100%; max-width: 300px" @submit.prevent="validateForm">
                <h2>Contact us</h2>

                <!-- Name input -->
                <MDBInput label="Name" v-model="nameCustomValidation" wrapperClass="mb-4" />

                <!-- Email input -->
                <MDBInput type="email" label="Email address" v-model="emailCustomValidation" wrapperClass="mb-4" />

                <!-- Subject input -->
                <MDBInput label="Subject" v-model="subjectCustomValidation" wrapperClass="mb-4" />

                <!-- Message input -->
                <MDBTextarea wrapperClass="mb-4" label="Message" v-model="messageCustomValidation" />

                <!-- Mail copy -->
                <MDBCheckbox label="Send me copy" v-model="copyCustomValidation" />

                <!-- Submit button -->
                <MDBBtn color="primary" block class="my-4" type="submit">Send</MDBBtn>

                <!-- Status message -->
                <div ref="statusRef"></div>
            </form>
        </section>
    </div>
</template>
<style scoped>
.contactUs {}
</style>