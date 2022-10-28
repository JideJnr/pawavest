import React from 'react'

const Form = () => {
  return (
    <div className='flex flex-col w-fit h-full  '>
    <div>
        <p className='text-2xl'>
            Get in Touch
        </p>


    </div>


    <div class="mx-auto w-full ">
      <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div class="mb-5">
          
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@domain.com"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter your subject"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Type your message"
            class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          ></textarea>
        </div>

      </form>
    </div>

    <div className='flex flex-col text-[11px]'>

      <p> 
        Powerledger is committed to protecting and respecting
          your privacy, and we’ll only use your personal 
          information in accordance with our privacy policy 
          including, to administer your account and to provide 
          the products and services you requested from us. 
          From time to time, we will contact you about our 
          products and services, as well as other content that 
          may be of interest to you.
          


      </p>

      <p>
        You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please see our Privacy Policy.

      </p>

      <p>
      If you consent to us contacting you for this purpose, please tick below:

      </p>

      <p>

        I agree to receive other communications from Powerledger*
      </p>
    </div>

    <div>
          <button
            class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          >
            Submit
          </button>
        </div>


</div>
  )
}

export default Form