import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const userTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MarketDetailPage = () => {
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
              <div className="flex flex-col font-outfit gap-2 items-center justify-start w-full">
                <div className="bg-gray_900_5f flex flex-col items-start justify-start p-2.5 rounded-[10px] w-full">
                  <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[42%] md:w-full">
                    <Img
                      src="images/img_user_3.svg"
                      className="h-6 w-6"
                      alt="user"
                    />
                    <Text className="text-gray_900 tracking-[0.18px]" size="xl">
                      Market
                    </Text>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col font-urbanist items-start justify-start p-2.5 w-full"
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
                  className="common-pointer flex flex-col font-urbanist items-start justify-start p-2.5 w-full"
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
                <div
                  className="common-pointer flex flex-col items-start justify-end p-2 w-full"
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
            <div className="bg-gray_50 flex flex-row gap-2 items-start justify-start p-[5px] rounded-lg w-[19%] md:w-full">
              <Text
                className="ml-[11px] mt-[3px] text-gray_500 tracking-[0.14px]"
                size="md"
              >
                Marketplace
              </Text>
              <Text className="text-gray_500 tracking-[0.14px]" size="md">
                <>&gt;</>
              </Text>
              <Text
                className="mt-[3px] text-gray_900 tracking-[0.14px]"
                size="md"
              >
                Open Bid
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between mt-[34px] w-[99%] md:w-full">
              <Img
                src="images/img_rectangle2044_7.png"
                className="h-[420px] md:h-auto object-cover rounded-[12px]"
                alt="Rectangle2054"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                  <Text
                    className="text-black_900 tracking-[0.32px]"
                    as="h2"
                    size="4xl"
                  >
                    Dayco Serpentine Belt
                  </Text>
                  <Text
                    className="!font-normal leading-[180.00%] text-gray_500_ab tracking-[0.16px] w-full"
                    size="lg"
                  >
                    Open repair of infrarenal aortic aneurysm or dissection,
                    plus repair of associated arterial trauma, following
                    unsuccessful endovascular repair; tube prosthesis...
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-8 grid grid-cols-2 mt-5 w-[70%]"
                  orientation="horizontal"
                >
                  <div
                    className="common-pointer flex flex-row gap-3.5 items-center justify-between w-full"
                    onClick={() => navigate("/otheruserprofile")}
                  >
                    <Img
                      src="images/img_ellipse1015_42x42.png"
                      className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                      alt="Ellipse1015 One"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray_500 tracking-[0.14px]"
                        size="md"
                      >
                        Creator
                      </Text>
                      <Text
                        className="text-black_900 tracking-[0.16px]"
                        as="h6"
                        size="lg"
                      >
                        Eleanor Pena
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-row gap-3.5 items-center justify-between w-full"
                    onClick={() => navigate("/otheruserprofile")}
                  >
                    <Img
                      src="images/img_ellipse1016.png"
                      className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                      alt="Ellipse1016"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray_500 tracking-[0.14px]"
                        size="md"
                      >
                        Owner
                      </Text>
                      <Text
                        className="text-black_900 tracking-[0.16px]"
                        as="h6"
                        size="lg"
                      >
                        Ahmad Kazuto
                      </Text>
                    </div>
                  </div>
                </List>
                <Line className="bg-gray_100 h-px mt-5 w-full" />
                <div className="flex flex-row gap-10 items-start justify-start mt-[21px] w-[68%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start w-[51%]">
                    <Text
                      className="!font-medium text-gray_500_ab tracking-[0.16px]"
                      size="lg"
                    >
                      Auction End In
                    </Text>
                    <div className="flex flex-row items-center justify-end w-full">
                      <Button
                        className="cursor-pointer font-semibold h-11 text-black_900 text-center text-xl tracking-[0.20px] w-11"
                        shape="RoundedBorder10"
                        size="md"
                        variant="FillGray50"
                      >
                        03
                      </Button>
                      <Img
                        src="images/img_user_10x10.svg"
                        className="h-2.5 ml-1 w-2.5"
                        alt="user Three"
                      />
                      <Button
                        className="cursor-pointer font-semibold h-11 ml-1 text-black_900 text-center text-xl tracking-[0.20px] w-11"
                        shape="RoundedBorder10"
                        size="md"
                        variant="FillGray50"
                      >
                        12
                      </Button>
                      <Img
                        src="images/img_user_10x10.svg"
                        className="h-2.5 ml-1 w-2.5"
                        alt="user Four"
                      />
                      <Button
                        className="cursor-pointer font-semibold h-11 ml-1 text-black_900 text-center text-xl tracking-[0.20px] w-11"
                        shape="RoundedBorder10"
                        size="md"
                        variant="FillGray50"
                      >
                        42
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-[38%]">
                    <Text
                      className="!font-medium text-gray_500_ab tracking-[0.16px]"
                      size="lg"
                    >
                      Current Bid
                    </Text>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[97%] md:w-full">
                      <Img
                        src="images/img_sort.svg"
                        className="h-8 w-8"
                        alt="sort"
                      />
                      <Text
                        className="text-black_900 tracking-[0.20px]"
                        as="h5"
                        size="2xl"
                      >
                        3,89 ETH
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-3.5 items-center justify-start mt-[37px] w-[56%] md:w-full">
                  <Button
                    className="flex h-[50px] items-center justify-center w-[50px]"
                    shape="icbRoundedBorder8"
                    size="lgIcn"
                    variant="icbOutlineGray100"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="h-6"
                      alt="favorite"
                    />
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[210px] text-center text-sm text-white_A700 tracking-[0.14px]"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="FillGray900"
                  >
                    Place A Bid
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start mt-[53px] w-full">
              <Text className="text-black_900" as="h4" size="3xl">
                More Works by Eleanor Pena
              </Text>
              <List
                className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                  <div className="h-[140px] relative w-full">
                    <Img
                      src="images/img_rectangle2044_13.png"
                      className="h-[140px] m-auto object-cover rounded-[12px] w-full"
                      alt="Rectangle2044"
                    />
                    <div className="absolute flex flex-row gap-2 items-center justify-between right-[3%] top-[6%] w-[48%]">
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
                  <div className="flex flex-col gap-[17px] items-start justify-start mb-3 w-[94%] md:w-full">
                    <div className="flex flex-col items-start justify-start pt-0.5">
                      <Text
                        className="text-black_900 tracking-[0.16px]"
                        as="h6"
                        size="lg"
                      >
                        Person Melirik Kesamping
                      </Text>
                      <Text
                        className="mt-1 text-gray_500 tracking-[0.12px]"
                        size="s"
                      >
                        By Eleanor Pena
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
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
                            2,42 ETH
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
                      src="images/img_rectangle2044_14.png"
                      className="h-[140px] m-auto object-cover rounded-[12px] w-full"
                      alt="Rectangle2044 One"
                    />
                    <div className="absolute flex flex-row gap-2 items-center justify-between right-[3%] top-[6%] w-[48%]">
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
                  <div className="flex flex-col gap-[17px] items-start justify-start mb-3 w-[94%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-black_900 tracking-[0.16px]"
                        as="h6"
                        size="lg"
                      >
                        Building Reflection Xd
                      </Text>
                      <Text
                        className="mt-1 text-gray_500 tracking-[0.12px]"
                        size="s"
                      >
                        By Eleanor Pena
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
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
                            52,12 ETH
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
                      src="images/img_rectangle2044_15.png"
                      className="h-[140px] m-auto object-cover rounded-[12px] w-full"
                      alt="Rectangle2044 Two"
                    />
                    <div className="absolute flex flex-row gap-2 items-center justify-between right-[3%] top-[6%] w-[48%]">
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
                  <div className="flex flex-col gap-[17px] items-start justify-start mb-3 w-[94%] md:w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start">
                      <Text
                        className="text-black_900 tracking-[0.16px]"
                        as="h6"
                        size="lg"
                      >
                        Natural Atomic Circle
                      </Text>
                      <Text
                        className="text-gray_500 tracking-[0.12px]"
                        size="s"
                      >
                        By Eleanor Pena
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
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
                            alt="sort Three"
                          />
                          <Text
                            className="text-black_900 tracking-[0.14px]"
                            size="md"
                          >
                            22,52 ETH
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
                      src="images/img_rectangle2044_16.png"
                      className="h-[140px] m-auto object-cover rounded-[12px] w-full"
                      alt="Rectangle2044 Three"
                    />
                    <div className="absolute flex flex-row gap-2 items-center justify-between right-[3%] top-[6%] w-[48%]">
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
                          alt="heart Three"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start mb-3 w-[94%] md:w-full">
                    <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5">
                      <Text
                        className="text-black_900 tracking-[0.16px]"
                        as="h6"
                        size="lg"
                      >
                        Oldtown Artistic Alley
                      </Text>
                      <Text
                        className="mt-1 text-gray_500 tracking-[0.12px]"
                        size="s"
                      >
                        By Eleanor Pena
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
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
                            alt="sort Four"
                          />
                          <Text
                            className="text-black_900 tracking-[0.14px]"
                            size="md"
                          >
                            1,224 ETH
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketDetailPage;
