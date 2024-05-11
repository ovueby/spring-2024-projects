<script setup>
import { ref } from 'vue'
import SC from "../components/SC.vue"

const validated = ref(false)

function invalidateForm() {
  validated.value = true
}

function submitForm(e) {
  e.preventDefault()
  validated.value = true
  setValidity(firstName, "no")

  firstName.value.classList.add('was-validated')
  console.log(firstName.value.value, lastName.value)
}
</script>

<template>
  <main>
    <h1 class="text-center"><SC/> Contact</h1>
    <p>You can contact <SC/> at the form below.</p>
    <form :class="{ 'was-validated': validated }" action="mailto:samcarr@my.cwi.edu" method="POST" enctype="text/plain">
      <div class="mb-3">
        <label class="form-label" for="firstName">Name</label>
        <div class="input-group">
          <input type="text" name="firstName" id="firstName"
                 class="form-control" placeholder="First" aria-label="First Name" ref="firstName" required
                 @invalid="invalidateForm">
          <input type="text" id="lastName" name="lastName"
                 class="form-control" placeholder="Last" aria-label="Last Name" ref="lastName" required
                 @invalid="invalidateForm">
        </div>
      </div>
      <div class="mb-3">
        <label for="subject" class="form-label">Subject</label>
        <input type="text" name="subject" id="subject" class="form-control" required
               @invalid="validateForm"/>
      </div>
      <div class="mb-3">
        <label for="returnEmail" class="form-label">Return Email</label>
        <input type="email" name="email" id="returnEmail" class="form-control" v-model="returnEmailModel" required
               @invalid="validateForm"/>
      </div>
      <div class="mb-3">
        <div class="form-floating">
          <textarea class="form-control" name="message" placeholder="Leave your message here" id="emailMessage" style="min-height: 250px" required></textarea>
          <label for="emailMessage" @invalid="invalidateForm">Message</label>
        </div>
      </div>

      <div class="mb-3 btn-group" role="group">
        <button type="submit" class="btn btn-primary mb-3">Submit</button>
        <button type="reset" class="btn btn-secondary mb-3">Reset</button>
      </div>

    </form>
  </main>
</template>
