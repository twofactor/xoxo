import Head from "next/head";
import {
  UserCircleIcon,
  PhotoIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import { CometButton } from "@comet-labs/react";
import { Work_Sans } from "@next/font/google";
const inter = Work_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Comet React SDK</title>
        <meta
          name="description"
          content="The Comet React SDK lets you launch new Solana NFT collections in your app!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <div className="isolate bg-white">
          <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#9b2541ea-d39d-499b-bd42-aeea3e93f5ff)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="9b2541ea-d39d-499b-bd42-aeea3e93f5ff"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="px-6 pt-6 lg:px-8">
            <nav
              className="flex items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <a
                  href="https://www.withcomet.com"
                  target="_blank"
                  className="-m-1.5 p-1.5"
                >
                  <span className="sr-only">Comet React SDK</span>
                  <img className="h-8" src="/comet.png" alt="" />
                </a>
              </div>
            </nav>
          </div>
          <main>
            <div className="relative py-24 sm:py-32 lg:pb-40">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Comet React SDK
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    The Comet React SDK lets you launch new Solana NFT
                    collections in your app. Integrate Comet's Instant Wallet
                    and Minting functionality into your React app in 1 line of
                    code. Check out the demo below!
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="https://comet-3.gitbook.io/comet-sdk/project-guides/launch-and-mint-your-first-nft-collection"
                      target="_blank"
                      className="rounded-md bg-slate-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a
                      href="https://www.npmjs.com/package/@comet-labs/react"
                      target="_blank"
                      className="text-base font-semibold leading-7 text-gray-900"
                    >
                      Check us out on NPM <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div className="mt-16 flow-root sm:mt-24">
                  <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                    <div className="bg-white rounded-md shadow-2xl ring-1 ring-gray-900/10">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 rounded-md">
                        <div className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-slate-600 text-white sm:h-12 sm:w-12">
                            <UserCircleIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Login with Comet
                            </p>
                            <p className="mt-1 text-sm text-gray-500 mb-3">
                              Let your users sign in with Comet
                            </p>
                            <CometButton action="login" />
                          </div>
                        </div>
                        <div className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-slate-600 text-white sm:h-12 sm:w-12">
                            <PhotoIcon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              View Comet Gallery
                            </p>
                            <p className="mt-1 text-sm text-gray-500 mb-2">
                              Let your users view their Comet gallery
                            </p>
                            <CometButton action="gallery" />
                          </div>
                        </div>
                        <div className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-slate-600 text-white sm:h-12 sm:w-12">
                            <BanknotesIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Mint an NFT
                            </p>
                            <p className="mt-1 text-sm text-gray-500 mb-2">
                              Let your users mint NFTs, with Stripe if you're
                              charging for it
                            </p>
                            <CometButton
                              action="mint"
                              collectionId="22c6ecefe246"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                >
                  <path
                    fill="url(#b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </main>
        </div>
      </main>
    </>
  );
}
