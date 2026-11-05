<template>
  <div>
    <base-nav-bar
      :toggle
      :nav-items
      logo="/logo.svg"
      label="Main Navigation"
      @handle-toggle="handleToggleNavbar"
      @handle-close="handleCloseNavbar"
    />
    <base-main>
      <slot />
    </base-main>
    <base-footer :year="currentYear" />
  </div>
</template>

<script lang="ts" setup>
import { useWebsiteStore } from "../../stores/useWebsiteStore";

const store = useWebsiteStore();

const { currentYear } = storeToRefs(store);

const toggle = ref(false);

// const sampleLinks = [
//   { to: "/mass-schedule", name: "Mass Schedule" },
//   { to: "/live-stream", name: "Live Stream" },
//   { to: "/sacraments", name: "Sacraments" },
//   { to: "/prayer-list", name: "Prayer List" },
// ];

const navItems = [
  { to: "/", name: "Home" },
  {
    to: "/mass-schedule",
    name: "Liturgy & Worship",
    dropdown: true,
    links: [
      { to: "/mass-schedule", name: "Mass Schedule" },
      { to: "/live-stream", name: "Live Stream" },
      { to: "/sacraments", name: "Sacraments" },
      { to: "/prayer-list", name: "Prayer List" },
    ],
  },
  {
    to: "/parish-bulletin",
    name: "News & Events",
    dropdown: true,
    links: [
      { to: "/parish-bulletin", name: "Parish Bulletin" },
      {
        to: "https://calendarwiz.com/sacred-heart-auburn-hills",
        name: "Parish Calendar",
      },
      { to: "https://www.aod.org/", name: "Archdiocese of Detroit" },
      {
        to: "https://restructuring.aod.org/",
        name: "Archdiocesan Restructuring",
      },
      {
        to: "https://www.unleashthegospel.org/",
        name: "Unleash the Gospel",
      },
      { to: "https://www.familiesofparishes.org/", name: "Family of Parishes" },
      {
        to: "https://esacredheart.org/docs/family-of-parishes-info.pdf",
        name: "Family of Parishes Info",
      },
    ],
  },
  { to: "/ministries", name: "Ministries" },
  { to: "/links", name: "Resources" },
  {
    to: "/religious-education",
    name: "Education",
  },
  {
    to: "/donate",
    name: "Donate",
    dropdown: true,
    links: [
      { to: "/donate", name: "Donate" },
      {
        to: "https://www.givecsa.org/sacred-heart-auburn-hills",
        name: "2025 CSA Gifts",
      },
      {
        to: "https://esacredheart.org/images/form-qr-code.png",
        name: "Online Giving QR Code",
      },
      {
        to: "tel:+1-248-920-9444",
        name: "Text 'Give' to 248-920-9444",
      },
    ],
  },
  {
    to: "/parish-history",
    name: "About Us",
    dropdown: true,
    links: [
      { to: "/parish-history", name: "Parish History" },
      {
        to: "/directions",
        name: "Directions",
      },
      {
        to: "/parish-staff",
        name: "Contact Info",
      },
      {
        to: "/contact-us",
        name: "Contact Us",
      },
    ],
  },
  {
    to: "https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDMK0gboLGYetYap7e2x_nockIbebAOYfaMsDdNj8ucwSnb2U3HWity0oPTT21QzFE*",
    icon: "fa-solid fa-church",
    label: "Join Our Parish",
    name: "Join Us",
  },
  {
    to: "/login",
    icon: "fa-solid fa-circle-user",
    label: "User Profile",
    name: "Login",
    dropdown: true,
    links: [
      { to: "/login", name: "Login" },
      {
        to: "/settings",
        name: "Settings",
      },
    ],
  },
];

const handleToggleNavbar = () => {
  toggle.value = !toggle.value;
};

const handleCloseNavbar = () => {
  toggle.value = false;
};
</script>

<style></style>
