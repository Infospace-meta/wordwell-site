<template>
  <div>
    <!-- Hero Section -->
    <OrdersHero />
    
    <!-- Main Content: Form and Steps Side by Side -->
    <div class="gap-0 grid grid-cols-1 lg:grid-cols-2">
      <!-- Left: Form -->
      <div>
        <OrdersForm />
      </div>
      
      <!-- Right: Order Steps with Sticky Positioning -->
      <div class="lg:top-4 lg:sticky h-fit">
        <OrderSteps />
      </div>
    </div>
    
    <!-- Why Choose Us Section -->
    <WhyChooseUs />
    
    <!-- Insights & Blogs Section -->
    <InsightsBlogs />
  </div>
</template>

<script setup>
import OrdersForm from "../components/OrdersForm.vue";
//import OrdersHero from "../components/OrdersHero.vue";
//import OrderSteps from "../components/OrderSteps.vue";
//import WhyChooseUs from "../components/WhyChooseUs.vue";
//import InsightsBlogs from "../components/InsightsBlogs.vue";
</script>