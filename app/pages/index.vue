<template>
  <div>
    <base-section class="heart-mass-times-section w-full h-auto" id="mass">
      <div class="heart-mass-times-wrap grid grid-cols-1">
        <div
          class="heart-mass-times-half-grid grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
        >
          <div class="w-full h-full">
            <nuxt-picture
              provider="imagekit"
              format="avif, webp"
              src="placeholder.jpg"
              alt="Sacred Heart of Jesus statue at Sacred Heart Catholic Church"
              class="church-img w-full h-full object-cover"
              loading="lazy"
              placeholder="/placeholder.jpg"
            >
            </nuxt-picture>
            <base-card node="section" variant="card-fop" class="relative p-16">
              <div
                class="absolute w-full h-auto top-0 left-1/32 translate-y-0 -translate-1/32 text-center"
              >
                <h2>Quote of the Week:</h2>
                <p class="text-xl font-semibold">
                  <q class=""
                    >It was to strengthen your heart that he came to suffer and
                    die, came to be spit upon and crowned with thorns, came to
                    be accustomed to shameful things, yes came to be fastened to
                    the wood of the cross.
                  </q>
                  -Saint Augustine
                </p>
              </div>
            </base-card>
          </div>
          <div
            class="mass-church-info mass-time-grad h-full flex flex-col justify-center items-center p-6 md:p-6.5 lg:p-7 xl:p-8"
          >
            <div class="bg-sec box p-4">
              <h2 class="heading">SH Content</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                laboriosam non accusantium nobis delectus repudiandae soluta
                fuga quae, dolorum iusto? Voluptatum harum repellendus minus
                obcaecati omnis quidem. Sequi, blanditiis est.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                laboriosam non accusantium nobis delectus repudiandae soluta
                fuga quae, dolorum iusto? Voluptatum harum repellendus minus
                obcaecati omnis quidem. Sequi, blanditiis est.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                laboriosam non accusantium nobis delectus repudiandae soluta
                fuga quae, dolorum iusto? Voluptatum harum repellendus minus
                obcaecati omnis quidem. Sequi, blanditiis est.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                laboriosam non accusantium nobis delectus repudiandae soluta
                fuga quae, dolorum iusto? Voluptatum harum repellendus minus
                obcaecati omnis quidem. Sequi, blanditiis est.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                laboriosam non accusantium nobis delectus repudiandae soluta
                fuga quae, dolorum iusto? Voluptatum harum repellendus minus
                obcaecati omnis quidem. Sequi, blanditiis est.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                laboriosam non accusantium nobis delectus repudiandae soluta
                fuga quae, dolorum iusto? Voluptatum harum repellendus minus
                obcaecati omnis quidem. Sequi, blanditiis est.
              </p>
            </div>
          </div>
        </div>
      </div>
    </base-section>

    <base-section class="heart-mass-times-section w-full h-auto" id="mass">
      <div class="heart-mass-times-wrap grid grid-cols-1">
        <div
          class="heart-mass-times-half-grid grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
        >
          <div class="h-full">
            <nuxt-picture
              provider="imagekit"
              format="avif, webp"
              src="sacred-heart-statue.jpg"
              alt="Sacred Heart of Jesus statue at Sacred Heart Catholic Church"
              class="church-img grayscale-50 w-full h-full object-cover"
              loading="lazy"
              placeholder="/placeholder.jpg"
            >
              <!-- <source
                srcset="
                  https://images.esacredheart.org/sacred-heart-statue-mobile.jpg
                "
                type="image/jpeg"
                media="(min-width: 320px) and (max-width: 767px)"
              />
              <source
                srcset="
                  https://images.esacredheart.org/sacred-heart-statue-tablet.jpg
                "
                type="image/jpeg"
                media="(min-width: 768px) and (min-width: 1024px)"
              /> -->
              <!-- <img
                src="https://images.esacredheart.org/sacred-heart-statue.jpg"
                alt="Sacred Heart of Jesus statue at Sacred Heart Catholic Church"
                class="church-img"
                loading="lazy"
              /> -->
            </nuxt-picture>
          </div>
          <div
            class="mass-church-info mass-time-grad h-full flex flex-col justify-center items-center p-6 md:p-6.5 lg:p-7 xl:p-8"
          >
            <div class="bg-sec box p-4">
              <h2 class="heading">
                <span class="me-3"
                  ><i class="fa-sharp fa-solid fa-cross"></i></span
                >Mass Times
              </h2>
              <p class="mass-time">
                Saturday <span class="divider"></span>4:00 P.M.
              </p>
              <p class="mass-time">
                Sunday <span class="divider"></span>9:00 A.M. &amp; 11:00 A.M.
              </p>
              <p class="mass-time">
                Monday&#44; Tuesday&#44; &amp; Friday
                <span class="divider"></span>9:00 A.M.
              </p>
              <p class="mass-time">
                Wednesday &amp; Thursday <span class="divider"></span>9:00
                A.M.<br />
                at St. Thomas More Parish
              </p>
              <a
                href="live-stream.html"
                class="btn-live-stream-cta"
                data-bs-toggle="toolip"
                data-bs-placement="bottom"
                title="View Live Stream"
              >
                <span class="me-3"
                  ><i class="fa-sharp fa-solid fa-video"></i></span
                >Live Stream
              </a>
              <hr class="mx-2 seperator" />
              <h2 class="heading">Confession Times</h2>
              <p class="confess-time">
                Saturday <span class="divider"></span>3:00 P.M.<br />
                or by appointment.
              </p>
            </div>
            <div class="bg-sec box p-4">
              <h3 class="heading parish-staff-head">
                Our Pastorial Associate &amp; Admin.
              </h3>
              <p class="staff-member associate">Deacon Michael Stach</p>
              <h3 class="heading parish-staff-head parish-staff-sub-head">
                Our Deacon
              </h3>
              <p class="staff-member deacon">Deacon David Fleming</p>
            </div>
            <div class="bg-sec box p-4">
              <h4 class="heading chapel-head">
                <span class="mx-3"
                  ><i class="fa-sharp fa-solid fa-dove"></i></span
                >Eucharistic Chapel
              </h4>
              <p class="chapel-info">Come and pray anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </base-section>
    <base-section class="text-center parish-highlights">
      <div class="container">
        <div class="row">
          <h2 class="visually-hidden">Parish Highlights</h2>
          <div class="col-md-4">
            <div class="highlight-item my-3">
              <div class="highlight-icon">
                <i class="fa-sharp fa-solid fa-2x fa-scroll"></i>
              </div>
              <h3 class="heading highlight-title">Parish Bulletin</h3>
              <p class="highlight-desc">
                See the latest<br class="d-md-none" />
                news at SH
              </p>
              <a
                href="parish-bulletin.html"
                role="button"
                class="btn-ghost"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Read bulletin"
                aria-label="Parish bulletin"
                >Read</a
              >
            </div>
          </div>
          <div class="col-md-4">
            <div class="highlight-item my-3">
              <div class="highlight-icon">
                <i class="fa-sharp fa-solid fa-2x fa-calendar-alt"></i>
              </div>
              <h3 class="heading highlight-title">Parish Calendar</h3>
              <p class="highlight-desc">
                Keep current of<br class="d-md-none" />
                happenings at SH
              </p>
              <a
                href="https://calendarwiz.com/sacred-heart-auburn-hills"
                role="button"
                class="btn-ghost"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="View calendar"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Parish calendar"
              >
                View
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="highlight-item my-3">
              <div class="highlight-icon">
                <i class="fa-sharp fa-solid fa-2x fa-church"></i>
              </div>
              <h3 class="heading highlight-title">Our Location</h3>
              <p class="highlight-desc">
                View directions and<br class="d-md-none" />
                map of parish
              </p>
              <a
                href="directions.html"
                role="button"
                class="btn-ghost"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Find directions"
                aria-label="Parish directions"
                >Find</a
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="highlight-item my-3">
              <div class="highlight-icon">
                <img
                  src="https://images.esacredheart.org//star.svg"
                  alt=""
                  class="star-icon"
                  height="150"
                  width="150"
                />
              </div>
              <h3 class="heading highlight-title">Thoughts for the Week</h3>
              <p class="highlight-desc">Share the Word</p>
              <div class="dropdown" id="showdrop">
                <button
                  type="button"
                  class="dropdown-toggle btn-ghost dropdown-btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                  id="dropdownMenuButton1"
                >
                  Explore
                </button>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                  id="showing"
                  role="menu"
                >
                  <li role="presentation">
                    <a
                      href="https://reallifecatholic.com"
                      class="dropdown-item"
                      data-bs-toggle="tooltip"
                      role="menuitem"
                      data-bs-placement="right"
                      title="Real Life Catholic"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span class="me-2"
                        ><img
                          src="https://images.esacredheart.org/real-life-catholic-logo.png"
                          alt=""
                          loading="lazy"
                          width="25"
                          height="25" /></span
                      >Real Life Catholic
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="https://ascensionpress.com"
                      class="dropdown-item"
                      data-bs-toggle="tooltip"
                      role="menuitem"
                      data-bs-placement="right"
                      title="Father Mike Schmitz"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span class="me-2"
                        ><img
                          src="https://images.esacredheart.org/ascension-press-logo.png"
                          alt=""
                          loading="lazy"
                          width="25"
                          height="25" /></span
                      >Ascension Press
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="https://www.wordonfire.org"
                      class="dropdown-item"
                      data-bs-toggle="tooltip"
                      role="menuitem"
                      data-bs-placement="right"
                      title="Word on Fire"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span class="me-2"
                        ><img
                          src="https://images.esacredheart.org/word-on-fire-logo.png"
                          alt=""
                          loading="lazy"
                          width="25"
                          height="25" /></span
                      >Word on Fire
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="highlight-item my-3">
              <div class="highlight-icon">
                <img
                  src="https://images.esacredheart.org/prayer.svg"
                  alt=""
                  class="prayer-icon"
                  width="150"
                  height="150"
                />
              </div>
              <h3 class="heading highlight-title">Intercessory Prayer</h3>
              <p class="highlight-desc">Pray with us</p>
              <div class="dropdown" id="showdrop1">
                <button
                  type="button"
                  class="dropdown-toggle btn-ghost dropdown-btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                  id="dropdownMenuButton2"
                >
                  Reflect
                </button>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton2"
                  id="showing1"
                  role="menu"
                >
                  <li role="presentation">
                    <a
                      href="prayer-list.html"
                      class="dropdown-item"
                      data-bs-toggle="tooltip"
                      role="menuitem"
                      data-bs-placement="right"
                      title="Sacred Heart's prayer list"
                    >
                      <span class="me-2"><i class="fas fa-pray"></i></span
                      >Prayer List
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="docs/2021-11-07-intercessory-prayer.pdf"
                      class="dropdown-item"
                      data-bs-toggle="tooltip"
                      role="menuitem"
                      data-bs-placement="right"
                      title="Intercessory Prayer"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Intercessory Prayer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="highlight-item my-4">
              <div class="highlight-icon">
                <i class="fa-sharp fa-solid fa-2x fa-bible"></i>
              </div>
              <h3 class="heading highlight-title">Faith Formation</h3>
              <p class="highlight-desc">Grow with God</p>
              <div class="dropdown" id="showdrop2">
                <button
                  type="button"
                  class="dropdown-toggle btn-ghost dropdown-btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                  id="dropdownMenuButton3"
                >
                  Learn
                </button>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton3"
                  id="showing2"
                  role="menu"
                >
                  <li role="presentation">
                    <a
                      href="religious-education.html"
                      class="dropdown-item"
                      data-bs-toggle="tooltip"
                      role="menuitem"
                      data-bs-placement="right"
                      title="Sacred Heart's Religious Ed Program"
                      >Religious Education</a
                    >
                  </li>
                  <li role="presentation">
                    <a
                      href="https://formed.org"
                      class="dropdown-item"
                      data-bs-toggle="tooltip"
                      role="menuitem"
                      data-bs-placement="right"
                      title="Formed"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span class="me-2"
                        ><img
                          src="https://images.esacredheart.org/formed-logo.png"
                          alt=""
                          width="15"
                          height="15" /></span
                      >Formed
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </base-section>

    <lazy-base-section
      class="fop-section w-full h-auto bg-[#dbdfe7] pt-11 px-9 pb-12 md:p-12 lg:p-14 xl:pt-16 xl:px-16 xl:pb-18"
      aria-labelledby="fop"
    >
      <div class="fop-section-wrap grid grid-cols-1">
        <h2 id="fop" class="sr-only">Family of Parishes</h2>
        <nuxt-img
          provider="imagekit"
          src="/family-of-parishes-logo.svg"
          alt="Family of Parishes' Logo"
          aria-labelledby="fop"
          width="550"
          height="250"
          class="fop-img block mt-0 mx-auto mb-8 md:mb-10 lg:mb-12 max-w-full h-auto object-cover cursor-pointer"
        />
        <nav
          class="fop-nav w-full h-auto"
          aria-label="Family of Parishes Local Vicariate Links"
        >
          <ul
            class="fop-grid fop-grid-container w-full max-w-160 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-384 container my-0 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-5 gap-6 p-0 text-center list-none"
          >
            <li class="fop-grid-item inline-block">
              <lazy-base-card
                node="nuxt-link"
                variant="card-fop"
                class="fop-link hover:bg-[#fef9c3] active:[#fef9c3] block text-dark no-underline outline-0 cursor-pointer bg-[#b5d6d6] p-5 md:p-6 lg:p-7 xl:p-8 rounded-2xl max-h-75 fop-link-drop-shadow focus:outline-0 focus:border-2 focus:border-solid focus:border-primary-dark"
                to="https://www.sthugo.org"
                external
                target="_blank"
                v-tooltip="'Saint Hugo of the Hills'"
                aria-label="Saint Hugo of the Hills's Website"
              >
                <h3
                  class="fop-heading font-cursive not-italic leading-normal font-bold text-xl mb-2 md:mb-3 md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.18rem] 2xl:text-2xl"
                >
                  St. Hugo of the Hills
                </h3>
                <p
                  class="fop-location font-sans font-medium text-base leading-normal md:text-lg md:leading-7 lg:text-xl xl:text-base xl:leading-6 2xl:text-xl 2xl:leading-7"
                >
                  Bloomfield Hills
                </p>
              </lazy-base-card>
            </li>
            <li class="fop-grid-item inline-block">
              <lazy-base-card
                node="nuxt-link"
                variant="card-fop"
                class="fop-link hover:bg-[#fef9c3] active:[#fef9c3] block text-dark no-underline outline-0 cursor-pointer bg-[#b5d6d6] p-5 md:p-6 lg:p-7 xl:p-8 rounded-2xl max-h-75 fop-link-drop-shadow focus:outline-0 focus:border-2 focus:border-solid focus:border-primary-dark"
                to="https://stthomasmoretroy.org"
                external
                target="_blank"
                v-tooltip="'Saint Thomas More'"
                aria-label="Saint Thomas More's Website"
              >
                <h3
                  class="fop-heading font-cursive not-italic leading-normal font-bold text-xl mb-2 md:mb-3 md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.18rem] 2xl:text-2xl"
                >
                  St. Thomas More
                </h3>
                <p
                  class="fop-location font-sans font-medium text-base leading-normal md:text-lg md:leading-7 lg:text-xl xl:text-base xl:leading-6 2xl:text-xl 2xl:leading-7"
                >
                  Troy
                </p>
              </lazy-base-card>
            </li>
            <li class="fop-grid-item inline-block">
              <lazy-base-card
                node="nuxt-link"
                variant="card-fop"
                class="fop-link hover:bg-[#fef9c3] active:[#fef9c3] block text-dark no-underline outline-0 cursor-pointer bg-[#b5d6d6] p-5 md:p-6 lg:p-7 xl:p-8 rounded-2xl max-h-75 fop-link-drop-shadow focus:outline-0 focus:border-2 focus:border-solid focus:border-primary-dark"
                to="https://www.st-damien.org"
                external
                target="_blank"
                v-tooltip="'Saint Damien of Molokai'"
                aria-label="Saint Damien of Molokai's Website"
              >
                <h3
                  class="fop-heading font-cursive not-italic leading-normal font-bold text-xl mb-2 md:mb-3 md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.18rem] 2xl:text-2xl"
                >
                  St. Damien of Molokai
                </h3>
                <p
                  class="fop-location font-sans font-medium text-base leading-normal md:text-lg md:leading-7 lg:text-xl xl:text-base xl:leading-6 2xl:text-xl 2xl:leading-7"
                >
                  Pontiac
                </p>
              </lazy-base-card>
            </li>
            <li class="fop-grid-item inline-block">
              <lazy-base-card
                node="nuxt-link"
                variant="card-fop"
                class="fop-link hover:bg-[#fef9c3] active:[#fef9c3] block text-dark no-underline outline-0 cursor-pointer bg-[#b5d6d6] p-5 md:p-6 lg:p-7 xl:p-8 rounded-2xl max-h-75 fop-link-drop-shadow focus:outline-0 focus:border-2 focus:border-solid focus:border-primary-dark"
                to="https://www.stbencc.org"
                external
                target="_blank"
                v-tooltip="'Saint Benedict'"
                aria-label="Saint Benedict's Website"
              >
                <h3
                  class="fop-heading font-cursive not-italic leading-normal font-bold text-xl mb-2 md:mb-3 md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.18rem] 2xl:text-2xl"
                >
                  St. Benedict
                </h3>
                <p
                  class="fop-location font-sans font-medium text-base leading-normal md:text-lg md:leading-7 lg:text-xl xl:text-base xl:leading-6 2xl:text-xl 2xl:leading-7"
                >
                  Waterford
                </p>
              </lazy-base-card>
            </li>
          </ul>
          <div
            class="fop-restruct-wrapper grid place-content-center place-items-center mt-16"
          >
            <nuxt-link
              class="fop-restruct-link inline-block text-light bg-tertiary hover:bg-light hover:text-tertiary hover:border-2 hover:border-solid hover:border-tertiary focus:outline-0 focus:border-4 focus:border-solid focus:border-gold not-italic font-semibold text-xl leading-normal font-sans rounded-lg tracking-wide p-4 cursor-pointer transition-shadow ease-in-out duration-150"
              to="https://revamp.esacredheart.org/"
              external
              target="_blank"
              v-tooltip="'Learn more Archdiocesan Restructuring'"
              aria-label="Archdiocese of Detroit Restructuring"
            >
              <span class="me-1">
                <nuxt-img
                  provider="imagekit"
                  src="/new-aod-logo.svg"
                  alt=""
                  width="32"
                  height="32"
                  class="inline-block align-middle rounded-[9999px] w-8 h-8"
                />
              </span>
              Learn More</nuxt-link
            >
          </div>
        </nav>
      </div>
    </lazy-base-section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<style lang="css" scoped>
.mass-time-grad,
.join-us-cta {
  background: linear-gradient(to top, #f3e7e9 0, #e3eeff 99%, #e3eeff 100%);
}

.fop-link-drop-shadow {
  filter: drop-shadow(0px 10px 8px rgba(55, 65, 81, 0.25));
}
.fop-restruct-link:active {
  box-shadow: 0 0 5px 5px #2c3e4c;
}
</style>
