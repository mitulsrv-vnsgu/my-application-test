import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const userTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MyProfileCollectionPage = () => {
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
                className="ml-4 md:ml-[0] text-gray_901 tracking-[0.12px]"
                size="s"
              >
                GENERAL
              </Text>
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <div
                  className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                  onClick={() => navigate("/")}
                >
                  <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] pr-0.5 w-[55%] md:w-full">
                    <Img
                      src="images/img_clock_1.svg"
                      className="h-6 w-6"
                      alt="clock"
                    />
                    <Text className="text-gray_500 tracking-[0.18px]" size="xl">
                      Dashboard
                    </Text>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-end p-2 w-full"
                  onClick={() => navigate("/message")}
                >
                  <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] w-[46%] md:w-full">
                    <Img
                      src="images/img_car.svg"
                      className="h-6 w-6"
                      alt="car"
                    />
                    <Text
                      className="mt-[3px] text-gray_500 tracking-[0.18px]"
                      size="xl"
                    >
                      Message
                    </Text>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-end p-2 w-full"
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
                      alt="clock One"
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
              <div className="flex flex-col font-outfit gap-2 items-center justify-start w-full">
                <div className="bg-gray_900_5f flex flex-col items-start justify-start p-2.5 rounded-[10px] w-full">
                  <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[51%] md:w-full">
                    <Img
                      src="images/img_user_5.svg"
                      className="h-6 w-6"
                      alt="user One"
                    />
                    <Text className="text-gray_900 tracking-[0.18px]" size="xl">
                      Collection
                    </Text>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col font-urbanist items-start justify-start p-2.5 w-full"
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
                <div
                  className="common-pointer flex flex-col font-urbanist items-start justify-end p-2 w-full"
                  onClick={() => navigate("/myprofilehistory")}
                >
                  <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] pr-1 w-[41%] md:w-full">
                    <Img
                      src="images/img_clock_24x24.svg"
                      className="h-6 w-6"
                      alt="clock Two"
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
          <div className="font-urbanist h-[258px] md:h-[292px] mt-[49px] mx-auto relative w-[78%]">
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
        <div className="flex flex-1 flex-col gap-[34px] items-center justify-start md:px-5 w-full">
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
              <SelectBox
                className="w-[27%] sm:w-full"
                placeholderClassName=""
                indicator={
                  <Img
                    src="images/img_ellipse1020.png"
                    className="h-[52px] mr-[35px] w-[52px] rounded-[50%]"
                    alt="Ellipse 1020"
                  />
                }
                isMulti={false}
                name="user Two"
                options={userTwoOptionsList}
                isSearchable={false}
                placeholder=""
              />
            </div>
          </div>
          <div className="flex flex-col font-urbanist items-start justify-start w-[94%] md:w-full">
            <Text
              className="text-black_900 tracking-[0.34px]"
              as="h2"
              size="5xl"
            >
              Collection
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[22px] w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[134px]"
                leftIcon={
                  <Img
                    src="images/img_user_4.svg"
                    className="ml-4 mr-2.5 my-3.5"
                    alt="user"
                  />
                }
                shape="CircleBorder14"
                size="lg"
                variant="OutlineGray100"
              >
                <div className="font-medium text-base text-black_900 text-left tracking-[0.16px]">
                  Category
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[137px] ml-6 sm:ml-[0]"
                leftIcon={
                  <Img
                    src="images/img_signal_24x24.svg"
                    className="ml-4 mr-2.5 my-3.5"
                    alt="signal"
                  />
                }
                shape="CircleBorder14"
                size="lg"
                variant="OutlineGray100"
              >
                <div className="font-medium text-base text-black_900 text-left tracking-[0.16px]">
                  Collection
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[151px] ml-6 sm:ml-[0]"
                leftIcon={
                  <Img
                    src="images/img_clock_3.svg"
                    className="ml-4 mr-2.5 my-3.5"
                    alt="clock"
                  />
                }
                shape="CircleBorder14"
                size="lg"
                variant="OutlineGray100"
              >
                <div className="font-medium text-base text-black_900 text-left tracking-[0.16px]">
                  Price Range
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[151px] sm:ml-[0] ml-[447px]"
                leftIcon={
                  <Img
                    src="images/img_menu.svg"
                    className="ml-4 mr-2.5 my-3.5"
                    alt="menu"
                  />
                }
                shape="CircleBorder14"
                size="lg"
                variant="OutlineGray100"
              >
                <div className="font-medium text-base text-black_900 text-left tracking-[0.16px]">
                  Filter & Sort
                </div>
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start mt-[30px] w-full">
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-white_A700 flex flex-1 flex-col gap-5 justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                  <div className="h-[193px] relative w-full">
                    <Img
                      src="images/img_rectangle2044_9.png"
                      className="h-[193px] m-auto object-cover rounded-[12px] w-full"
                      alt="Rectangle2044"
                    />
                    <div className="absolute flex flex-row gap-2 items-center justify-between right-[3%] top-[4%] w-[48%]">
                      <Button
                        className="cursor-pointer font-medium min-w-[75px] text-center text-white_A700 text-xs tracking-[0.12px]"
                        shape="CircleBorder14"
                        size="sm"
                        variant="Outline"
                      >
                        Ended
                      </Button>
                      <Button
                        className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                        size="smIcn"
                        variant="icbOutline"
                      >
                        <Img
                          src="images/img_favorite.svg"
                          className="h-[18px]"
                          alt="favorite"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start mb-[11px] ml-2 md:ml-[0]">
                    <Text
                      className="text-black_900 tracking-[0.16px]"
                      as="h6"
                      size="lg"
                    >
                      Diehard BATTERY-SILVER
                    </Text>
                    <Text className="text-gray_500 tracking-[0.12px]" size="s">
                      By Ralph Edwards
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-5 justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                  <div className="h-[193px] relative w-full">
                    <Img
                      src="images/img_rectangle2044_140x240.png"
                      className="h-[193px] m-auto object-cover rounded-[12px] w-full"
                      alt="Rectangle2044 One"
                    />
                    <div className="absolute flex flex-row gap-2 items-center justify-between right-[3%] top-[4%] w-[48%]">
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
                          src="images/img_favorite.svg"
                          className="h-[18px]"
                          alt="favorite One"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start mb-3 ml-2 md:ml-[0] pr-0.5 pt-0.5">
                    <Text
                      className="text-black_900 tracking-[0.16px]"
                      as="h6"
                      size="lg"
                    >
                      Dayco Serpentine Belt
                    </Text>
                    <Text
                      className="mt-1 text-gray_500 tracking-[0.12px]"
                      size="s"
                    >
                      By Marvin McKinney
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-5 justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                  <div className="h-[193px] relative w-full">
                    <Img
                      src="images/img_rectangle2044_10.png"
                      className="h-[193px] m-auto object-cover rounded-[12px] w-full"
                      alt="Rectangle2044 Two"
                    />
                    <div className="absolute flex flex-row gap-2 items-center justify-between right-[3%] top-[4%] w-[48%]">
                      <Button
                        className="cursor-pointer font-medium min-w-[75px] text-center text-white_A700 text-xs tracking-[0.12px]"
                        shape="CircleBorder14"
                        size="sm"
                        variant="Outline"
                      >
                        Ended
                      </Button>
                      <Button
                        className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                        size="smIcn"
                        variant="icbOutline"
                      >
                        <Img
                          src="images/img_favorite.svg"
                          className="h-[18px]"
                          alt="favorite Two"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start mb-3 ml-2 md:ml-[0] pr-0.5 pt-0.5">
                    <Text
                      className="text-black_900 tracking-[0.16px]"
                      as="h6"
                      size="lg"
                    >
                      Bosch Spark Plug
                    </Text>
                    <Text
                      className="mt-1 text-gray_500 tracking-[0.12px]"
                      size="s"
                    >
                      By Guy Hawkins
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-5 justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                  <div className="h-[193px] relative w-full">
                    <Img
                      src="images/img_rectangle2044_12.png"
                      className="h-[193px] m-auto object-cover rounded-[12px] w-full"
                      alt="Rectangle2044 Three"
                    />
                    <div className="absolute flex flex-row gap-2 items-center justify-between right-[3%] top-[4%] w-[48%]">
                      <Button
                        className="cursor-pointer font-medium min-w-[75px] text-center text-white_A700 text-xs tracking-[0.12px]"
                        shape="CircleBorder14"
                        size="sm"
                        variant="Outline"
                      >
                        Ended
                      </Button>
                      <Button
                        className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                        size="smIcn"
                        variant="icbOutline"
                      >
                        <Img
                          src="images/img_favorite.svg"
                          className="h-[18px]"
                          alt="favorite Three"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start mb-[11px] ml-2 md:ml-[0]">
                    <Text
                      className="text-black_900 tracking-[0.16px]"
                      as="h6"
                      size="lg"
                    >
                      Fram Oil Filter
                    </Text>
                    <Text className="text-gray_500 tracking-[0.12px]" size="s">
                      By Jerome Bell
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-5 justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                  <div className="h-[193px] relative w-full">
                    <Img
                      src="images/img_rectangle2044_7.png"
                      className="h-[193px] m-auto object-cover rounded-[12px] w-full"
                      alt="Rectangle2044 Four"
                    />
                    <div className="absolute flex flex-row gap-2 items-center justify-between right-[3%] top-[4%] w-[48%]">
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
                          src="images/img_favorite.svg"
                          className="h-[18px]"
                          alt="favorite Four"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start mb-[11px] ml-2 md:ml-[0]">
                    <Text
                      className="text-black_900 tracking-[0.16px]"
                      as="h6"
                      size="lg"
                    >
                      Fram Oil Filter
                    </Text>
                    <Text className="text-gray_500 tracking-[0.12px]" size="s">
                      By Eleanor Pena
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-5 justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                  <div className="h-[193px] relative w-full">
                    <Img
                      src="images/img_rectangle2044_2.png"
                      className="h-[193px] m-auto object-cover rounded-[12px] w-full"
                      alt="Rectangle2044 Five"
                    />
                    <div className="absolute flex flex-row gap-2 items-center justify-between right-[3%] top-[4%] w-[48%]">
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
                          src="images/img_favorite.svg"
                          className="h-[18px]"
                          alt="favorite Five"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start mb-[11px] ml-2 md:ml-[0]">
                    <Text
                      className="text-black_900 tracking-[0.16px]"
                      as="h6"
                      size="lg"
                    >
                      Mad Ballot Holder
                    </Text>
                    <Text className="text-gray_500 tracking-[0.12px]" size="s">
                      By Angelina Cruzz
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfileCollectionPage;
