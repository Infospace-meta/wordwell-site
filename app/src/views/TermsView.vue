<template>
  <div class="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
    <div
      class="max-w-4xl mx-auto bg-white shadow-sm border border-slate-200 rounded-3xl overflow-hidden"
    >
      <!-- Header Section -->
      <div class="bg-[#334a97] p-10 text-white text-center">
        <h1 class="text-3xl font-bold">Terms & Conditions</h1>
        <p class="mt-2 text-blue-100 opacity-80">
          Data Protection Policy & Service Agreement
        </p>
        <p class="mt-4 text-xs font-medium uppercase tracking-widest">
          Effective Date: January 20, 2026
        </p>
      </div>

      <!-- Content Section -->
      <div
        class="p-8 md:p-12 prose prose-slate max-w-none text-slate-700 leading-relaxed"
      >
        <section class="mb-10">
          <h2
            class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4"
          >
            1. INTRODUCTION
          </h2>
          <p>
            Welcome to
            <strong>Wordwell International Writers</strong> (“Company”, “we”,
            “our”, or “us”). These Terms and Conditions (“Terms”) govern your
            access to and use of our website, platform, and services.
          </p>
          <p>
            By registering, accessing, or using our platform, you (“User”,
            “Client”) agree to be bound by these Terms. If you do not agree,
            please do not use our services.
          </p>
        </section>

        <section class="mb-10">
          <h2
            class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4"
          >
            2. NATURE OF SERVICES
          </h2>
          <p>
            Wordwell International Writers provides writing, editing, research
            assistance, and related academic support services based on
            instructions provided by clients. Our services are intended for:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Research assistance</li>
            <li>Drafting support</li>
            <li>Editing and proofreading</li>
            <li>Educational guidance</li>
          </ul>
          <div
            class="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-800 italic"
          >
            <strong>Important:</strong> Clients are responsible for how they use
            the material provided.
          </div>
        </section>

        <section class="mb-10">
          <h2
            class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4"
          >
            3. USER ACCOUNT & REGISTRATION
          </h2>
          <p>
            To access our services, you may be required to create an account and
            provide accurate personal information (e.g., name, email). You agree
            that:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>All information provided is accurate and up to date.</li>
            <li>You will not impersonate another person.</li>
            <li>You are responsible for all activity under your account.</li>
          </ul>
        </section>

        <section class="mb-10">
          <h2
            class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4"
          >
            4. DATA COLLECTION & USE
          </h2>
          <p>
            We collect personal data necessary to deliver our services,
            including your full name, email address, contact details, and
            uploaded documents. We use this information to:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Provide requested services and communicate with you.</li>
            <li>Improve our platform functionality.</li>
            <li>Ensure quality and compliance with academic standards.</li>
          </ul>
        </section>

        <section class="mb-10">
          <h2
            class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4"
          >
            5. DATA PROTECTION & PRIVACY
          </h2>
          <h3 class="font-bold text-slate-800 mt-4">5.1 Confidentiality</h3>
          <p>
            All client information and submitted materials are treated as
            strictly confidential. We do not sell, rent, or share your personal
            data with third parties without your consent.
          </p>

          <h3 class="font-bold text-slate-800 mt-4">5.2 Data Security</h3>
          <p>
            We implement reasonable security measures including secure servers,
            encryption where applicable, and internal confidentiality agreements
            with our staff.
          </p>

          <h3 class="font-bold text-slate-800 mt-4">5.3 Data Retention</h3>
          <p>
            Your data will only be stored for as long as necessary to provide
            services. You may request deletion of your data at any time via
            support.
          </p>
        </section>

        <section class="mb-10">
          <h2
            class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4"
          >
            6. INTELLECTUAL PROPERTY
          </h2>
          <p>
            Upon full payment, the ownership of delivered work is transferred to
            the client. The Company retains the right to use anonymized samples
            for quality or training purposes unless otherwise requested by the
            client.
          </p>
        </section>

        <section class="mb-10">
          <h2
            class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4"
          >
            7. PAYMENTS & REFUNDS
          </h2>
          <p>
            All services must be paid for as agreed (via PayPal or stated
            methods) before final delivery. Refunds may be issued based on a
            review of complaints and company policy. Disputes must be raised
            within a reasonable time after delivery.
          </p>
        </section>

        <section class="mb-10">
          <h2
            class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4"
          >
            8. GOVERNING LAW
          </h2>
          <p>
            These Terms shall be governed by the laws of <strong>Kenya</strong>.
            Any disputes arising shall be subject to the jurisdiction of Kenyan
            courts.
          </p>
        </section>

        <section class="mb-6">
          <h2
            class="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4"
          >
            9. CONTACT INFORMATION
          </h2>
          <p>
            For any questions, concerns, or data-related requests, contact us
            at:
          </p>
          <p class="font-bold text-[#334a97]">
            Email: support@wordwellwriters.com
          </p>
        </section>

        <div class="mt-12 pt-8 border-t border-slate-200 text-center">
          <router-link
            to="/order"
            class="text-[#334a97] font-bold hover:underline"
          >
            &larr; Back to Order Page
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No complex logic needed for static text
</script>

<style scoped>
/* Optional styling for specific list markers */
.prose ul li::marker {
  color: #334a97;
}
</style>
