import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className='text-blue-500'>Welcome Home of Edducation</h2>
          <h1 className="mt-1 text-4xl leading-10 font-extrabold text-blue-500 sm:text-5xl sm:leading-none lg:text-6xl">
            Best Online<span className="text-green-500"> Learning </span> Website
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-lg leading-7 text-gray-700">
            Explore a world of knowledge with our diverse selection of online courses. Our platform offers expertly designed courses that cater to various interests and skill levels. From foundational lessons to advanced topics, you can learn at your own pace and from the comfort of your home, enhancing your skills and broadening your horizons.
          </p>

          <div className="mt-8">
            <button className="px-6 py-3 bg-green-500 text-white text-base font-medium rounded-md hover:bg-green-700">
              Read More
            </button>

          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#" className="text-blue-800 hover:text-gray-900 text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-red-400 hover:text-gray-900 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-red-700 hover:text-gray-900 text-2xl"><FaYoutube /></a>
            <a href="#" className="text-blue-500 hover:text-gray-900 text-2xl"><FaTwitter /></a>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              <button className="h-10 w-10 bg-green-500 text-white rounded-full">01</button>
              <button className="h-10 w-10 bg-gray-300 text-gray-700 rounded-full">02</button>
              <button className="h-10 w-10 bg-gray-300 text-gray-700 rounded-full">03</button>
            </div>
          </div>
        </div>


      </div>

      {/* section Testimonials Start here */}
      <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold  tracking-tight sm:text-4xl">Testimonials</h2>
          </div>

          <div class="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            <div class="overflow-hidden bg-white rounded-md shadow">
              <div class="px-8 py-12">
                <div class="relative w-24 h-24 mx-auto">
                  <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg" alt="Jenny Wilson" />
                  <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote class="mt-7">
                  <p class="text-lg text-black">“The courses offered by this platform have significantly enhanced my skills and knowledge. Highly recommended for anyone looking to advance their career.”</p>
                </blockquote>
                <p class="text-base font-semibold text-black mt-9">Jenny Wilson</p>
                <p class="mt-1 text-base text-gray-600">Project Manager at Microsoft</p>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md shadow">
              <div class="px-8 py-12">
                <div class="relative w-24 h-24 mx-auto">
                  <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg" alt="Robert Fox" />
                  <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote class="mt-7">
                  <p class="text-lg text-black">“The innovative tools and resources provided by this platform have been instrumental in my career growth. The learning experience is unparalleled.”</p>
                </blockquote>
                <p class="text-base font-semibold text-black mt-9">Robert Fox</p>
                <p class="mt-1 text-base text-gray-600">Founder at Brain.co</p>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md shadow">
              <div class="px-8 py-12">
                <div class="relative w-24 h-24 mx-auto">
                  <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg" alt="Kristin Watson" />
                  <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote class="mt-7">
                  <p class="text-lg text-black">“The supportive community and comprehensive courses offered by this platform have been a game-changer for me. I’ve gained so much confidence in my skills.”</p>
                </blockquote>
                <p class="text-base font-semibold text-black mt-9">Kristin Watson</p>
                <p class="mt-1 text-base text-gray-600">UX Designer at Google</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* section Testimonials Ends here */}

      <section id="features" class="px-2 space-y-6 py-8 md:py-12 lg:py-24 max-w-5xl mx-auto">
        <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-blue-500">Features</h2>
          <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Tools to empower your learning journey, enabling you to achieve your educational goals effortlessly.
          </p>
        </div>
        <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div class="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16 4h4"></path>
                <path d="M20 4v12"></path>
                <path d="M2 9h10"></path>
                <path d="M2 9l6-6"></path>
                <path d="M12 3v6"></path>
              </svg>
              <div class="space-y-2">
                <h3 class="font-bold">Interactive Courses</h3>
                <p class="text-sm text-muted-foreground">Engage in courses with interactive content to enhance your learning experience.</p>
              </div>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="12" y1="16" x2="16" y2="12"></line>
                <line x1="12" y1="16" x2="8" y2="12"></line>
              </svg>
              <div class="space-y-2">
                <h3 class="font-bold">Progress Tracking</h3>
                <p class="text-sm text-muted-foreground">Monitor your learning progress with detailed tracking tools.</p>
              </div>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="3" y1="15" x2="21" y2="15"></line>
                <line x1="9" y1="3" x2="9" y2="21"></line>
                <line x1="15" y1="3" x2="15" y2="21"></line>
              </svg>
              <div class="space-y-2">
                <h3 class="font-bold">Live Classes</h3>
                <p class="text-sm text-muted-foreground">Participate in live classes and interact with instructors in real-time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* start footer */}
      <footer className="bg-gray-100 text-black py-12 mt-8 rounded-tl-lg rounded-br-lg mb-0 container mx-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between">
          <div className="w-1/5 mb-4">
            <h2 className="text-xl font-bold mb-2">Shop Matcha</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Just the Matcha</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">The Trial Kit</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Wholesale & Bulk</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Teaware</a></li>
            </ul>
          </div>
          <div className="w-1/5 mb-4">
            <h2 className="text-xl font-bold mb-2">Learn</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Matcha Recipes</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Caffeine Content</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Health Benefits</a></li>
            </ul>
          </div>
          <div className="w-1/5 mb-4">
            <h2 className="text-xl font-bold mb-2">More from Tenzo</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Our Story</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Affiliate</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">FAQ's</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Sign In</a></li>
            </ul>
          </div>
          <div className="w-1/5 mb-4">
            <h2 className="text-xl font-bold mb-2">Let's Stay Connected</h2>
            <p className="mb-4">Enter your email to unlock 10% OFF.</p>
            <form className="flex flex-col space-y-2">
              <input className="p-2 rounded border border-gray-300" type="email" placeholder="Your Email" required />
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
            </form>
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2">Follow us</h2>
              <div className="mt-8 flex justify-center space-x-4">
                <a href="#" className="text-blue-600 hover:text-gray-900 text-2xl"><FaFacebookF /></a>
                <a href="#" className="text-red-400 hover:text-gray-900 text-2xl"><FaInstagram /></a>
                <a href="#" className="text-red-600 hover:text-gray-900 text-2xl"><FaYoutube /></a>
                <a href="#" className="text-blue-400 hover:text-gray-900 text-2xl"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 text-center text-sm">
          <p className="mb-2">&copy; 2024 Smart College.co</p>
          <p>
            <a href="#" className="hover:text-green-500">Terms of Service</a> |
            <a href="#" className="hover:text-green-500"> Privacy Policy</a> |
            <a href="#" className="hover:text-green-500"> Refund Policy</a> |
            <a href="#" className="hover:text-green-500"> Accessibility Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
