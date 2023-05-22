import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const DashboardPage = () => {
  const navigate = useNavigate();

  const [searchinputvalue, setSearchinputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[302px] bg-gray_50 border-gray_100 border-r border-solid flex h-screen justify-start overflow-auto md:px-5 top-[0]">
          <div className="flex flex-row gap-3.5 items-center justify-center md:ml-[0] ml-[34px] mr-[92px] mt-[34px] w-[59%]">
            <Img
              src="images/img_ellipse1015.png"
              className="h-14 md:h-auto rounded-[50%] w-14"
              alt="Ellipse1015"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="!font-semibold text-black_900 tracking-[0.18px]"
                as="h6"
                size="xl"
              >
                Kevin Cranel
              </Text>
              <Text
                className="!font-normal mt-1 text-gray_500 tracking-[0.14px]"
                size="md"
              >
                @kecrane
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start mt-[50px] px-[18px] w-full">
            <div className="flex flex-col gap-[13px] justify-start w-full">
              <Text
                className="ml-4 md:ml-[0] text-black_900 tracking-[0.12px]"
                size="s"
              >
                GENERAL
              </Text>
              <div className="flex flex-col font-outfit gap-2 items-center justify-start w-full">
                <div className="bg-gray_900_5f flex flex-col items-start justify-start p-2.5 rounded-[10px] w-full">
                  <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[55%] md:w-full">
                    <Img
                      src="images/img_eye.svg"
                      className="h-6 w-6"
                      alt="eye"
                    />
                    <Text className="text-gray_900 tracking-[0.18px]" size="xl">
                      Dashboard
                    </Text>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col font-urbanist items-start justify-end p-2 w-full"
                  onClick={() => navigate("/message")}
                >
                  <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] w-[46%] md:w-full">
                    <Img
                      src="images/img_car.svg"
                      className="h-6 w-6"
                      alt="car"
                    />
                    <Text
                      className="common-pointer mt-[3px] text-gray_500 tracking-[0.18px]"
                      size="xl"
                      onClick={() => navigate("/saved")}
                    >
                      Message
                    </Text>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col font-urbanist items-start justify-end p-2 w-full"
                  onClick={() => navigate("/settings")}
                >
                  <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] w-[44%] md:w-full">
                    <Img
                      src="images/img_settings.svg"
                      className="h-6 w-6"
                      alt="settings"
                    />
                    <Text
                      className="mt-[3px] text-gray_500 tracking-[0.18px]"
                      size="xl"
                    >
                      Settings
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[13px] justify-start w-full">
              <Text
                className="ml-4 md:ml-[0] text-gray_901 tracking-[0.12px]"
                size="s"
              >
                MARKETPLACE
              </Text>
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <div
                  className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                  onClick={() => navigate("/market")}
                >
                  <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[42%] md:w-full">
                    <Img
                      src="images/img_user.svg"
                      className="h-6 w-6"
                      alt="user"
                    />
                    <Text className="text-gray_500 tracking-[0.18px]" size="xl">
                      Market
                    </Text>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                  onClick={() => navigate("/activebid")}
                >
                  <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[51%] md:w-full">
                    <Img
                      src="images/img_judge.svg"
                      className="h-6 w-6"
                      alt="judge"
                    />
                    <Text className="text-gray_500 tracking-[0.18px]" size="xl">
                      Active Bid
                    </Text>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                  onClick={() => navigate("/saved")}
                >
                  <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[39%] md:w-full">
                    <Img
                      src="images/img_clock.svg"
                      className="h-6 w-6"
                      alt="clock"
                    />
                    <Text className="text-gray_500 tracking-[0.18px]" size="xl">
                      Saved
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[13px] justify-start w-full">
              <Text
                className="ml-4 md:ml-[0] text-gray_901 tracking-[0.12px]"
                size="s"
              >
                MY PROFILE
              </Text>
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <div
                  className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                  onClick={() => navigate("/myprofilecollection")}
                >
                  <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] pr-0.5 w-[51%] md:w-full">
                    <Img
                      src="images/img_user_24x24.svg"
                      className="h-6 w-6"
                      alt="user One"
                    />
                    <Text className="text-gray_500 tracking-[0.18px]" size="xl">
                      Collection
                    </Text>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                  onClick={() => navigate("/myprofilewallet")}
                >
                  <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] pr-[3px] w-[39%] md:w-full">
                    <Img
                      src="images/img_computer.svg"
                      className="h-6 w-6"
                      alt="computer"
                    />
                    <Text className="text-gray_500 tracking-[0.18px]" size="xl">
                      Wallet
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end p-2 w-full">
                  <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] pr-1 w-[41%] md:w-full">
                    <Img
                      src="images/img_clock_24x24.svg"
                      className="h-6 w-6"
                      alt="clock One"
                    />
                    <Text
                      className="mt-[3px] text-gray_500 tracking-[0.18px]"
                      size="xl"
                    >
                      History
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-urbanist h-[258px] md:h-[293px] mt-[50px] mx-auto relative w-[78%]">
            <div className="absolute bg-gray_900 bottom-[0] h-[233px] inset-x-[0] mx-auto rounded-[15px] w-[234px]"></div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[91%]">
              <Button
                className="flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                size="lgIcn"
                variant="icbOutlineGray5003f"
              >
                <Img
                  src="images/img_question.svg"
                  className="h-6"
                  alt="question"
                />
              </Button>
              <Text
                className="!font-semibold mt-4 text-white_A700 tracking-[0.18px]"
                as="h6"
                size="xl"
              >
                Help Center
              </Text>
              <div className="flex flex-col gap-[30px] items-center justify-start mt-2.5 w-full">
                <Text
                  className="!font-normal leading-[180.00%] text-center text-gray_400 tracking-[0.14px]"
                  size="md"
                >
                  <>
                    Having trouble in Enefti?
                    <br />
                    Please contact us for more question
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[206px] text-center text-gray_900 text-sm tracking-[0.14px]"
                  shape="RoundedBorder10"
                  size="md"
                  variant="FillWhiteA700"
                >
                  Go To Help Center
                </Button>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-10 items-center justify-between outline outline-gray_100 p-[34px] sm:px-5 w-full">
            <Input
              value={searchinputvalue}
              onChange={(e) => setSearchinputvalue(e)}
              wrapClassName="flex md:flex-1 md:mt-0 my-0.5 w-[45%] md:w-full"
              className="p-0 placeholder:text-gray_500 text-gray_500 text-left text-sm tracking-[0.14px] w-full"
              name="SearchInput"
              placeholder="Search items, collections, and users"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer my-3.5 mx-4"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#93989a"
                  className="cursor-pointer my-auto"
                  onClick={() => setSearchinputvalue("")}
                  style={{
                    visibility:
                      searchinputvalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={24}
                  width={24}
                  viewBox="0 0 24 24"
                />
              }
              shape="srcRoundedBorder15"
              size="mdSrc"
              variant="srcOutlineGray300"
            ></Input>
            <div className="flex md:flex-1 flex-row font-urbanist gap-[30px] items-center justify-center md:mt-0 my-0.5 w-[32%] md:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[137px]"
                leftIcon={
                  <Img
                    src="images/img_sort.svg"
                    className="ml-4 mr-2.5 my-3.5"
                    alt="sort"
                  />
                }
                shape="RoundedBorder10"
                size="lg"
                variant="OutlineGray100"
              >
                <div className="font-medium text-base text-black_900 text-left tracking-[0.16px]">
                  3,421 ETH
                </div>
              </Button>
              <Button
                className="flex h-[52px] items-center justify-center w-[52px]"
                shape="icbCircleBorder25"
                size="lgIcn"
                variant="icbOutlineGray100"
              >
                <Img src="images/img_lock.svg" className="h-6" alt="lock" />
              </Button>
              <div className="flex flex-row gap-3 items-center justify-between w-[27%]">
                <Img
                  src="images/img_ellipse1020.png"
                  className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                  alt="Ellipse1020"
                />
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-6 w-6"
                  alt="arrowdown"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-urbanist gap-[34px] items-center justify-between w-[98%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[68%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[250px] relative w-full">
                  <Img
                    src="images/img_rectangle2040.png"
                    className="h-[250px] m-auto object-cover rounded-[15px] w-full"
                    alt="Rectangle2040"
                  />
                  <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[30px] sm:px-5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-[33px] items-start justify-start mb-[19px] mt-[23px] w-[76%] md:w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                        <Text
                          className="text-white_A700 tracking-[0.32px]"
                          as="h2"
                          size="4xl"
                        >
                          Create and Sell Extraordinary NFTs
                        </Text>
                        <Text
                          className="text-white_A700_a2 tracking-[0.14px]"
                          size="md"
                        >
                          The world’s first and largest digital marketplace for
                          crypto NFTs
                        </Text>
                      </div>
                      <div className="flex flex-row gap-5 items-center justify-start w-[51%] md:w-full">
                        <Button
                          className="cursor-pointer font-semibold min-w-[120px] text-center text-gray_900 text-sm tracking-[0.14px]"
                          shape="RoundedBorder10"
                          size="md"
                          variant="FillWhiteA700"
                        >
                          Explore More
                        </Button>
                        <Button
                          className="cursor-pointer font-semibold min-w-[120px] text-center text-sm text-white_A700 tracking-[0.14px]"
                          shape="RoundedBorder10"
                          size="md"
                          variant="OutlineWhiteA700"
                        >
                          Sell Artwork
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-center justify-start mt-[43px] w-full">
                <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                  <Text className="text-black_900" as="h4" size="3xl">
                    Trending Auction
                  </Text>
                  <Text
                    className="mt-0.5 text-gray_900 tracking-[0.14px]"
                    size="md"
                  >
                    View All
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                    <div className="h-[140px] relative w-full">
                      <Img
                        src="images/img_rectangle2044.png"
                        className="h-[140px] m-auto object-cover rounded-[12px] w-full"
                        alt="Rectangle2044"
                      />
                      <div className="absolute flex flex-row gap-2 items-center justify-between right-[4%] top-[6%] w-[51%]">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] text-center text-white_A700 text-xs tracking-[0.12px]"
                          shape="CircleBorder14"
                          size="sm"
                          variant="Outline"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          size="smIcn"
                          variant="icbOutline"
                        >
                          <Img
                            src="images/img_heart.svg"
                            className="h-[18px]"
                            alt="heart"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[17px] items-start justify-start mb-3 w-[93%] md:w-full">
                      <div className="flex flex-col gap-1.5 items-start justify-start">
                        <Text
                          className="text-black_900 tracking-[0.16px]"
                          as="h6"
                          size="lg"
                        >
                          The Unfortable Facer
                        </Text>
                        <Text
                          className="text-gray_500 tracking-[0.12px]"
                          size="s"
                        >
                          By Bane Riccardo
                        </Text>
                      </div>
                      <div className="flex flex-row gap-9 items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-gray_500 tracking-[0.10px]"
                            size="xs"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-start justify-start mt-1 w-full">
                            <Img
                              src="images/img_sort.svg"
                              className="h-4 w-4"
                              alt="sort"
                            />
                            <Text
                              className="text-black_900 tracking-[0.14px]"
                              size="md"
                            >
                              18,99 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium font-urbanist min-w-[88px] text-center text-white_A700 text-xs tracking-[0.12px]"
                          shape="RoundedBorder10"
                          size="sm"
                          variant="FillGray900"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                    <div className="h-[140px] relative w-full">
                      <Img
                        src="images/img_rectangle2044_140x222.png"
                        className="h-[140px] m-auto object-cover rounded-[12px] w-full"
                        alt="Rectangle2044 One"
                      />
                      <div className="absolute flex flex-row gap-2 items-center justify-between right-[4%] top-[6%] w-[51%]">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] text-center text-white_A700 text-xs tracking-[0.12px]"
                          shape="CircleBorder14"
                          size="sm"
                          variant="Outline"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          size="smIcn"
                          variant="icbOutline"
                        >
                          <Img
                            src="images/img_heart.svg"
                            className="h-[18px]"
                            alt="heart One"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[17px] items-start justify-start mb-3 w-[93%] md:w-full">
                      <div className="flex flex-col gap-1.5 items-start justify-start">
                        <Text
                          className="text-black_900 tracking-[0.16px]"
                          as="h6"
                          size="lg"
                        >
                          Mad Ballot Holder
                        </Text>
                        <Text
                          className="text-gray_500 tracking-[0.12px]"
                          size="s"
                        >
                          By Angelina Cruzz
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[38px] items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-gray_500 tracking-[0.10px]"
                            size="xs"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-start justify-start mt-1 w-full">
                            <Img
                              src="images/img_sort.svg"
                              className="h-4 w-4"
                              alt="sort One"
                            />
                            <Text
                              className="text-black_900 tracking-[0.14px]"
                              size="md"
                            >
                              4,32 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium font-urbanist min-w-[88px] text-center text-white_A700 text-xs tracking-[0.12px]"
                          shape="RoundedBorder10"
                          size="sm"
                          variant="FillGray900"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                    <div className="h-[140px] relative w-full">
                      <Img
                        src="images/img_rectangle2044_1.png"
                        className="h-[140px] m-auto object-cover rounded-[12px] w-full"
                        alt="Rectangle2044 Two"
                      />
                      <div className="absolute flex flex-row gap-2 items-center justify-between right-[4%] top-[6%] w-[51%]">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] text-center text-white_A700 text-xs tracking-[0.12px]"
                          shape="CircleBorder14"
                          size="sm"
                          variant="Outline"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          size="smIcn"
                          variant="icbOutline"
                        >
                          <Img
                            src="images/img_heart.svg"
                            className="h-[18px]"
                            alt="heart Two"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[17px] items-start justify-start mb-3 w-[93%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-black_900 tracking-[0.16px]"
                          as="h6"
                          size="lg"
                        >
                          Pile of Many Plates
                        </Text>
                        <Text
                          className="mt-1 text-gray_500 tracking-[0.12px]"
                          size="s"
                        >
                          By Ralphi Arness
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[38px] items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-gray_500 tracking-[0.10px]"
                            size="xs"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-start justify-start mt-1 w-full">
                            <Img
                              src="images/img_sort.svg"
                              className="h-4 w-4"
                              alt="sort Two"
                            />
                            <Text
                              className="text-black_900 tracking-[0.14px]"
                              size="md"
                            >
                              4,32 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium font-urbanist min-w-[88px] text-center text-white_A700 text-xs tracking-[0.12px]"
                          shape="RoundedBorder10"
                          size="sm"
                          variant="FillGray900"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-[18px] items-center justify-start mt-[33px] w-full">
                <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                  <Text className="text-black_900" as="h4" size="3xl">
                    Top Collection
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-[3px]">
                    <Text className="text-gray_900 tracking-[0.14px]" size="md">
                      View All
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                    <Text className="text-gray_500 tracking-[0.12px]" size="s">
                      Collection
                    </Text>
                    <div className="flex sm:flex-1 flex-row items-start justify-between w-[66%] sm:w-full">
                      <Text
                        className="text-gray_500 tracking-[0.12px]"
                        size="s"
                      >
                        Volume
                      </Text>
                      <Text
                        className="text-gray_500 tracking-[0.12px]"
                        size="s"
                      >
                        24h %
                      </Text>
                      <Text
                        className="text-gray_500 tracking-[0.12px]"
                        size="s"
                      >
                        Floor Price
                      </Text>
                      <Text
                        className="text-gray_500 tracking-[0.12px]"
                        size="s"
                      >
                        Owners
                      </Text>
                      <Text
                        className="text-gray_500 tracking-[0.12px]"
                        size="s"
                      >
                        Items
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-2.5 grid items-center pr-[7px] w-[99%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-row gap-3.5 items-center justify-between w-[21%] md:w-full">
                        <Img
                          src="images/img_ellipse1018.png"
                          className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                          alt="Ellipse1018"
                        />
                        <div className="flex flex-col gap-1.5 items-start justify-start">
                          <Text
                            className="text-black_900 tracking-[0.16px]"
                            as="h6"
                            size="lg"
                          >
                            Doodle Lucu
                          </Text>
                          <Text
                            className="text-gray_500 tracking-[0.12px]"
                            size="s"
                          >
                            By Doodles
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-[65%] md:w-full">
                        <div className="flex flex-row font-urbanist items-start justify-evenly w-[11%] sm:w-full">
                          <Img
                            src="images/img_sort.svg"
                            className="h-4 w-4"
                            alt="sort Three"
                          />
                          <Text
                            className="text-black_900 tracking-[0.14px]"
                            size="md"
                          >
                            14,32
                          </Text>
                        </div>
                        <Text
                          className="font-outfit sm:ml-[0] ml-[60px] text-green_600 tracking-[0.14px]"
                          size="md"
                        >
                          + 20,4%
                        </Text>
                        <div className="flex flex-row font-urbanist items-start justify-center sm:ml-[0] ml-[53px] w-[9%] sm:w-full">
                          <Img
                            src="images/img_sort.svg"
                            className="h-4 w-4"
                            alt="sort One"
                          />
                          <Text
                            className="ml-1 text-black_900 tracking-[0.14px]"
                            size="md"
                          >
                            2,3
                          </Text>
                        </div>
                        <Text
                          className="font-urbanist sm:ml-[0] ml-[91px] text-black_900 tracking-[0.14px]"
                          size="md"
                        >
                          2,2K
                        </Text>
                        <Text
                          className="font-urbanist sm:ml-[0] ml-[85px] text-black_900 tracking-[0.14px]"
                          size="md"
                        >
                          18
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-gray_100 w-full" />
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-row gap-3.5 items-center justify-between w-[24%] md:w-full">
                        <Img
                          src="images/img_ellipse1018_42x42.png"
                          className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                          alt="Ellipse1018 One"
                        />
                        <div className="flex flex-col gap-1.5 items-start justify-start">
                          <Text
                            className="text-black_900 tracking-[0.16px]"
                            as="h6"
                            size="lg"
                          >
                            Kimawi Genesis
                          </Text>
                          <Text
                            className="text-gray_500 tracking-[0.12px]"
                            size="s"
                          >
                            By Kimawi - Japan
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-row items-start justify-between w-[65%] md:w-full">
                        <div className="flex flex-row font-urbanist items-start justify-evenly">
                          <Img
                            src="images/img_sort.svg"
                            className="h-4 w-4"
                            alt="sort Four"
                          />
                          <Text
                            className="text-black_900 tracking-[0.14px]"
                            size="md"
                          >
                            6,11
                          </Text>
                        </div>
                        <Text
                          className="font-outfit text-red_600 tracking-[0.14px]"
                          size="md"
                        >
                          - 18,2%
                        </Text>
                        <div className="flex flex-row font-urbanist items-start justify-center">
                          <Img
                            src="images/img_sort.svg"
                            className="h-4 w-4"
                            alt="sort One One"
                          />
                          <Text
                            className="ml-1 text-black_900 tracking-[0.14px]"
                            size="md"
                          >
                            12,52
                          </Text>
                        </div>
                        <Text
                          className="font-urbanist text-black_900 tracking-[0.14px]"
                          size="md"
                        >
                          1,9K
                        </Text>
                        <Text
                          className="font-urbanist text-black_900 tracking-[0.14px]"
                          size="md"
                        >
                          21
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[43px] items-center justify-start outline outline-gray_100 p-[26px] sm:px-5 w-[30%] md:w-full">
              <div className="flex flex-col gap-5 items-center justify-start mt-3.5 w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="!font-semibold text-black_900"
                    as="h6"
                    size="xl"
                  >
                    Featured Creators
                  </Text>
                  <Text
                    className="text-gray_900 text-right tracking-[0.14px]"
                    size="md"
                  >
                    See All
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col gap-3 items-center justify-start p-1.5 rounded-[15px] shadow-bs2 w-full">
                  <div className="flex flex-col relative w-full">
                    <Img
                      src="images/img_rectangle2043.png"
                      className="h-[120px] mx-auto object-cover rounded-[12px] w-full"
                      alt="Rectangle2043"
                    />
                    <Img
                      src="images/img_ellipse1019.png"
                      className="h-[52px] mt-[-26px] mx-auto rounded-[50%] w-[52px] z-[1]"
                      alt="Ellipse1019"
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-start mb-2 w-[94%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-col font-urbanist items-start justify-start">
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <Text
                            className="!font-semibold text-black_900 text-center tracking-[0.14px]"
                            size="md"
                          >
                            Murakami Flowers
                          </Text>
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[18px] w-[18px]"
                            alt="checkmark"
                          />
                        </div>
                        <Text
                          className="mt-1 text-center text-gray_500 tracking-[0.12px]"
                          size="s"
                        >
                          @mftmkkus
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-outfit min-w-[64px] my-[5px] text-center text-white_A700 text-xs tracking-[0.12px]"
                        shape="CircleBorder14"
                        size="sm"
                        variant="Outline_1"
                      >
                        Follow
                      </Button>
                    </div>
                    <Line className="bg-gray_100 h-px w-full" />
                    <Text
                      className="!font-normal leading-[180.00%] text-gray_500 tracking-[0.12px] w-full"
                      size="s"
                    >
                      Murakami.Flowers is a work in which artist Takashi
                      Murakami’s representative artwork.....
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-center justify-start mb-[15px] w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="!font-semibold text-black_900"
                    as="h6"
                    size="xl"
                  >
                    Recent Activity
                  </Text>
                  <Text
                    className="text-gray_900 text-right tracking-[0.14px]"
                    size="md"
                  >
                    See All
                  </Text>
                </div>
                <List
                  className="flex-col gap-5 grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-[34px] items-center justify-between w-full">
                    <div className="flex flex-row gap-3.5 items-center justify-between w-[62%]">
                      <Img
                        src="images/img_ellipse1018_1.png"
                        className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                        alt="Ellipse1018 Two"
                      />
                      <div className="flex flex-col gap-1.5 items-start justify-start">
                        <Text
                          className="text-black_900 tracking-[0.16px]"
                          as="h6"
                          size="lg"
                        >
                          Uzachi #4390
                        </Text>
                        <Text
                          className="text-gray_500 tracking-[0.12px]"
                          size="s"
                        >
                          From Ragnarok Meta
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start w-[27%]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-4 w-4"
                        alt="sort Five"
                      />
                      <Text
                        className="text-black_900 tracking-[0.14px]"
                        size="md"
                      >
                        2.15 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-gray_100 w-full" />
                  <div className="flex flex-1 flex-row gap-[34px] items-center justify-between w-full">
                    <div className="flex flex-row gap-3.5 items-center justify-between w-3/5">
                      <Img
                        src="images/img_ellipse1018_2.png"
                        className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                        alt="Ellipse1018 Three"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-black_900 tracking-[0.16px]"
                          as="h6"
                          size="lg"
                        >
                          Doodles #3486
                        </Text>
                        <Text
                          className="mt-1 text-gray_500 tracking-[0.12px]"
                          size="s"
                        >
                          From Doodles
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start w-[29%]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-4 w-4"
                        alt="sort Six"
                      />
                      <Text
                        className="text-black_900 tracking-[0.14px]"
                        size="md"
                      >
                        4.42 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-gray_100 w-full" />
                  <div className="flex flex-1 flex-row gap-5 items-center justify-between w-full">
                    <div className="flex flex-row gap-3.5 items-center justify-between w-[66%]">
                      <Img
                        src="images/img_ellipse1018_3.png"
                        className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                        alt="Ellipse1018 Four"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-black_900 tracking-[0.16px]"
                          as="h6"
                          size="lg"
                        >
                          Murakami #2766
                        </Text>
                        <Text
                          className="mt-1 text-gray_500 tracking-[0.12px]"
                          size="s"
                        >
                          From Murakami
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start w-[27%]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-4 w-4"
                        alt="sort Seven"
                      />
                      <Text
                        className="text-black_900 tracking-[0.14px]"
                        size="md"
                      >
                        1.08 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-gray_100 w-full" />
                  <div className="flex flex-1 flex-row items-center justify-between w-full">
                    <div className="flex flex-row gap-3.5 items-center justify-between w-[59%]">
                      <Img
                        src="images/img_ellipse1018_4.png"
                        className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                        alt="Ellipse1018 Five"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-black_900 tracking-[0.16px]"
                          as="h6"
                          size="lg"
                        >
                          Doodles #2761
                        </Text>
                        <Text
                          className="mt-1 text-gray_500 tracking-[0.12px]"
                          size="s"
                        >
                          From Murakami
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start w-[26%]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-4 w-4"
                        alt="sort Eight"
                      />
                      <Text
                        className="text-black_900 tracking-[0.14px]"
                        size="md"
                      >
                        4.4 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-gray_100 w-full" />
                  <div className="flex flex-1 flex-row gap-3.5 items-center justify-between w-full">
                    <div className="flex flex-row gap-3.5 items-center justify-between w-[67%]">
                      <Img
                        src="images/img_ellipse1018_5.png"
                        className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                        alt="Ellipse1018 Six"
                      />
                      <div className="flex flex-col items-start justify-end">
                        <Text
                          className="text-black_900 tracking-[0.16px]"
                          as="h6"
                          size="lg"
                        >
                          Peachy Puch#22
                        </Text>
                        <Text
                          className="mt-[3px] text-gray_500 tracking-[0.12px]"
                          size="s"
                        >
                          From Mindblowonstudio
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start w-[29%]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-4 w-4"
                        alt="sort Nine"
                      />
                      <Text
                        className="text-black_900 tracking-[0.14px]"
                        size="md"
                      >
                        5.62 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-gray_100 w-full" />
                  <div className="flex flex-1 flex-row gap-[33px] items-center justify-between w-full">
                    <div className="flex flex-row gap-3.5 items-center justify-between w-[61%]">
                      <Img
                        src="images/img_ellipse1018_6.png"
                        className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                        alt="Ellipse1018 Seven"
                      />
                      <div className="flex flex-col items-center justify-start pt-0.5">
                        <Text
                          className="text-black_900 tracking-[0.16px]"
                          as="h6"
                          size="lg"
                        >
                          Gemmy #3723
                        </Text>
                        <Text
                          className="mt-1 text-gray_500 tracking-[0.12px]"
                          size="s"
                        >
                          From GemmySolana
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start w-[28%]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-4 w-4"
                        alt="sort Ten"
                      />
                      <Text
                        className="text-black_900 tracking-[0.14px]"
                        size="md"
                      >
                        5.32 ETH
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
