import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  ReactTable,
  SelectBox,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const userTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MyProfileWalletPage = () => {
  const tableData = React.useRef([
    {
      itemList: "From Mindblowonstudio",
      status: "Actived",
      openPrice: "5.62 ETH",
      yourOffer: "5.62 ETH",
      timeLeft: "1h 19m",
    },
    {
      itemList: "From Marvin McKinney",
      status: "On Going",
      openPrice: "5.62 ETH",
      yourOffer: "5.62 ETH",
      timeLeft: "1h 19m",
    },
    {
      itemList: "From Ralphi Arness",
      status: "On Going",
      openPrice: "5.62 ETH",
      yourOffer: "5.62 ETH",
      timeLeft: "1h 19m",
    },
    {
      itemList: "From Annette Black",
      status: "Ended",
      openPrice: "5.62 ETH",
      yourOffer: "5.62 ETH",
      timeLeft: "1h 19m",
    },
    {
      itemList: "From Eleanor Pena",
      status: "Actived",
      openPrice: "5.62 ETH",
      yourOffer: "5.62 ETH",
      timeLeft: "1h 19m",
    },
  ]);
  const navigate = useNavigate();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("itemList", {
        cell: (info) => (
          <div className="flex flex-row gap-3.5 items-start justify-start p-3">
            <Img
              src="images/img_ellipse1018_5.png"
              className="h-[42px] md:h-auto ml-[11px] mt-[9px] rounded-[50%] w-[42px]"
              alt="Ellipse1018"
            />
            <div className="flex flex-col items-start justify-end mt-2.5">
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
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[266px] pb-[25px] sm:pl-5 pl-6 text-gray_500 tracking-[0.14px]"
            size="md"
          >
            Item List
          </Text>
        ),
      }),
      tableColumnHelper.accessor("status", {
        cell: (info) => (
          <Text
            className="pb-[25px] pt-[34px] text-black_900 tracking-[0.14px]"
            size="md"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[111px] pb-[25px] text-gray_500 tracking-[0.14px]"
            size="md"
          >
            Status
          </Text>
        ),
      }),
      tableColumnHelper.accessor("openPrice", {
        cell: (info) => (
          <div className="flex flex-row gap-1.5 items-start justify-center sm:pr-5 pr-[25px] py-[25px]">
            <Img
              src="images/img_sort.svg"
              className="h-4 mt-2.5 w-4"
              alt="sort"
            />
            <Text
              className="mr-[37px] mt-[9px] text-black_900 tracking-[0.14px]"
              size="md"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[141px] pb-6 pl-0.5 pt-0.5 text-center text-gray_500 tracking-[0.14px]"
            size="md"
          >
            Open Price
          </Text>
        ),
      }),
      tableColumnHelper.accessor("yourOffer", {
        cell: (info) => (
          <div className="flex flex-row gap-1.5 items-start justify-center sm:pr-5 pr-[25px] py-[25px]">
            <Img
              src="images/img_sort.svg"
              className="h-4 mt-2.5 w-4"
              alt="sort One"
            />
            <Text
              className="mr-[33px] mt-[9px] text-black_900 tracking-[0.14px]"
              size="md"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[137px] pb-[26px] text-center text-gray_500 tracking-[0.14px]"
            size="md"
          >
            Your Offer
          </Text>
        ),
      }),
      tableColumnHelper.accessor("timeLeft", {
        cell: (info) => (
          <Text
            className="pb-[25px] pt-[34px] text-black_900 tracking-[0.14px]"
            size="md"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[85px] pb-[26px] text-gray_500 tracking-[0.14px]"
            size="md"
          >
            Time Left
          </Text>
        ),
      }),
    ];
  }, []);

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
                <div className="bg-gray_900_5f flex flex-col font-outfit items-start justify-start p-2.5 rounded-[10px] w-full">
                  <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[39%] md:w-full">
                    <Img
                      src="images/img_calculator.svg"
                      className="h-6 w-6"
                      alt="calculator"
                    />
                    <Text className="text-gray_900 tracking-[0.18px]" size="xl">
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
          <div className="flex md:flex-col flex-row font-urbanist gap-[34px] items-center justify-between w-[98%] md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-[68%] md:w-full">
              <Text
                className="text-black_900 tracking-[0.34px]"
                as="h2"
                size="5xl"
              >
                Wallet
              </Text>
              <List
                className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 rounded-[15px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[91%] md:w-full">
                    <Button
                      className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                      size="mdIcn"
                      variant="icbFillGray50"
                    >
                      <Img
                        src="images/img_frame162465.png"
                        className="h-[22px]"
                        alt="Frame162465"
                      />
                    </Button>
                    <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                      <div className="flex flex-col gap-3 items-center justify-end">
                        <Text
                          className="!font-normal mt-[5px] text-gray_500 tracking-[0.18px]"
                          size="xl"
                        >
                          Total Spending
                        </Text>
                        <Text className="text-black_900" as="h4" size="3xl">
                          $432,215.32
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-end justify-between w-full">
                        <div className="flex flex-row gap-1.5 items-center justify-start py-[3px]">
                          <Img
                            src="images/img_cursor.svg"
                            className="h-[18px] w-[18px]"
                            alt="cursor"
                          />
                          <Text
                            className="!font-normal text-green_600 tracking-[0.14px]"
                            size="md"
                          >
                            +2.4%
                          </Text>
                        </div>
                        <div className="bg-gray_500 h-1 my-2.5 rounded-[50%] w-1"></div>
                        <Text
                          className="!font-normal mb-0.5 mt-[5px] text-gray_500 tracking-[0.14px]"
                          size="md"
                        >
                          May 17, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start outline outline-[0.5px] outline-gray_100 p-6 sm:px-5 rounded-[15px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[89%] md:w-full">
                    <Button
                      className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                      size="mdIcn"
                      variant="icbFillGray50"
                    >
                      <Img
                        src="images/img_frame162465_gray_900.png"
                        className="h-[22px]"
                        alt="Frame162465 One"
                      />
                    </Button>
                    <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-end">
                        <Text
                          className="!font-normal mt-[3px] text-gray_500 tracking-[0.18px]"
                          size="xl"
                        >
                          Total Income
                        </Text>
                        <Text className="text-black_900" as="h4" size="3xl">
                          $21,579.22
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-end justify-between w-full">
                        <div className="flex flex-row gap-1.5 items-center justify-start py-[3px]">
                          <Img
                            src="images/img_trendingup.svg"
                            className="h-[18px] w-[18px]"
                            alt="trendingup"
                          />
                          <Text
                            className="!font-normal text-red_600 tracking-[0.14px]"
                            size="md"
                          >
                            -2.32
                          </Text>
                        </div>
                        <div className="bg-gray_500 h-1 my-2.5 rounded-[50%] w-1"></div>
                        <Text
                          className="!font-normal mb-0.5 mt-[5px] text-gray_500 tracking-[0.14px]"
                          size="md"
                        >
                          May 17, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start outline outline-[0.5px] outline-gray_100 p-[23px] sm:px-5 rounded-[15px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[13px] items-start justify-start mb-0.5 w-[90%] md:w-full">
                    <Button
                      className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                      size="mdIcn"
                      variant="icbFillGray50"
                    >
                      <Img
                        src="images/img_frame162465_gray_900_42x42.png"
                        className="h-[22px]"
                        alt="Frame162465 Two"
                      />
                    </Button>
                    <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                      <div className="flex flex-col gap-3 items-start justify-end">
                        <Text
                          className="!font-normal mt-[5px] text-gray_500 tracking-[0.18px]"
                          size="xl"
                        >
                          Total Saving
                        </Text>
                        <Text className="text-black_900" as="h4" size="3xl">
                          $68,483.16
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-end justify-between w-full">
                        <div className="flex flex-row gap-1.5 items-center justify-start py-[3px]">
                          <Img
                            src="images/img_cursor.svg"
                            className="h-[18px] w-[18px]"
                            alt="cursor One"
                          />
                          <Text
                            className="!font-normal text-green_600 tracking-[0.14px]"
                            size="md"
                          >
                            +2.4%
                          </Text>
                        </div>
                        <div className="bg-gray_500 h-1 my-2.5 rounded-[50%] w-1"></div>
                        <Text
                          className="!font-normal mb-0.5 mt-[5px] text-gray_500 tracking-[0.14px]"
                          size="md"
                        >
                          May 17, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col font-outfit gap-[27px] items-center justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-black_900 tracking-[0.24px]"
                    as="h4"
                    size="3xl"
                  >
                    Recent Activity
                  </Text>
                  <div className="flex flex-col font-urbanist items-center justify-start mt-1">
                    <Text className="text-gray_900 tracking-[0.14px]" size="md">
                      View All
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col font-urbanist items-center justify-end outline outline-[0.5px] outline-gray_100 py-6 rounded-[15px] shadow-bs1 w-full">
                  <div className="overflow-auto w-full">
                    <ReactTable
                      columns={tableColumns}
                      data={tableData.current}
                      rowClass={""}
                      headerClass="border-b border-gray_100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col items-center justify-start outline outline-gray_100 p-6 sm:px-5 w-[30%] md:w-full">
              <div className="flex flex-col items-center justify-start mb-4 w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <Radio
                    value="Wallet"
                    className="font-medium sm:pr-5 text-black_900 text-left text-lg tracking-[0.18px]"
                    inputClassName="mr-[5px]"
                    checked={false}
                    name="walletTwo"
                    label="Wallet"
                    id="Wallet"
                    size="sm"
                  ></Radio>
                  <div className="bg-white_A700 flex flex-col items-center justify-start rounded-[15px] w-full">
                    <div className="h-[150px] relative w-full">
                      <Img
                        src="images/img_group33968.png"
                        className="h-[150px] m-auto object-cover w-full"
                        alt="group33968"
                      />
                      <div className="absolute flex flex-row gap-[26px] h-max inset-[0] items-end justify-center m-auto w-[89%]">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="!font-normal text-white_A700 tracking-[0.14px]"
                            size="md"
                          >
                            Local Banking Card
                          </Text>
                          <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] mt-[30px] py-[3px] w-[99%] md:w-full">
                            <Img
                              src="images/img_.svg"
                              className="h-[5px]"
                              alt="Two"
                            />
                            <Img
                              src="images/img_.svg"
                              className="h-[5px]"
                              alt="Three"
                            />
                            <Img
                              src="images/img_.svg"
                              className="h-[5px]"
                              alt="Four"
                            />
                            <Text
                              className="!font-normal text-white_A700_a2 tracking-[0.14px]"
                              size="md"
                            >
                              3982
                            </Text>
                          </div>
                          <Text
                            className="!font-normal ml-0.5 md:ml-[0] mt-[27px] text-white_A700 tracking-[0.14px]"
                            size="md"
                          >
                            Kevin Cranel
                          </Text>
                        </div>
                        <Img
                          src="images/img_visalogo.svg"
                          className="h-4 mt-[101px]"
                          alt="visalogo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="bg-gray_100 h-px mt-6 w-full" />
                <div className="flex flex-col gap-[31px] items-center justify-start mt-[26px] w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start">
                    <Text
                      className="!font-normal text-gray_500 tracking-[0.18px]"
                      size="xl"
                    >
                      Your Balance
                    </Text>
                    <Text className="text-black_900" as="h4" size="3xl">
                      $185,424.52
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-between w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[228px] text-center text-sm text-white_A700 tracking-[0.14px]"
                      shape="RoundedBorder10"
                      size="md"
                      variant="FillGray900"
                    >
                      Add New Card
                    </Button>
                    <Button
                      className="flex h-[42px] items-center justify-center w-[42px]"
                      shape="icbRoundedBorder8"
                      size="mdIcn"
                      variant="icbFillGray90067"
                    >
                      <Img
                        src="images/img_topup.png"
                        className="h-6"
                        alt="TopUp"
                      />
                    </Button>
                  </div>
                </div>
                <Line className="bg-gray_100 h-px mt-6 w-full" />
                <div className="flex flex-col gap-[18px] items-start justify-start mt-[31px] w-full">
                  <Text className="text-black_900 tracking-[0.18px]" size="xl">
                    Transaction History
                  </Text>
                  <List
                    className="flex-col gap-6 grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-6 items-center justify-between w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-between w-[64%]">
                        <Button
                          className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                          size="mdIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_icon.png"
                            className="h-6"
                            alt="Icon"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start pt-0.5">
                          <Text
                            className="text-black_900 tracking-[0.16px]"
                            as="h6"
                            size="lg"
                          >
                            Exchange to ETH
                          </Text>
                          <Text
                            className="mt-1 text-gray_500 tracking-[0.12px]"
                            size="s"
                          >
                            Today at 4:13 PM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-[28%]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-4 w-4"
                          alt="sort Five"
                        />
                        <Text
                          className="text-black_900 tracking-[0.14px]"
                          size="md"
                        >
                          2.22 ETH
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-gray_100 w-full" />
                    <div className="flex flex-1 flex-row items-center justify-between w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-between w-[58%]">
                        <Button
                          className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                          size="mdIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_topup.png"
                            className="h-6"
                            alt="Frame162471"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-black_900 tracking-[0.16px]"
                            as="h6"
                            size="lg"
                          >
                            Enefty Top Up
                          </Text>
                          <Text
                            className="mt-1 text-gray_500 tracking-[0.12px]"
                            size="s"
                          >
                            Today at 4:23 PM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-[26%]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-4 w-4"
                          alt="sort Six"
                        />
                        <Text
                          className="text-black_900 tracking-[0.14px]"
                          size="md"
                        >
                          1.32 ETH
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-gray_100 w-full" />
                    <div className="flex flex-1 flex-row gap-[19px] items-center justify-between w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-between w-[66%]">
                        <Button
                          className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                          size="mdIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_icon_gray_900.png"
                            className="h-6"
                            alt="Icon One"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start pt-0.5">
                          <Text
                            className="text-black_900 tracking-[0.16px]"
                            as="h6"
                            size="lg"
                          >
                            Open Bid Success
                          </Text>
                          <Text
                            className="mt-1 text-gray_500 tracking-[0.12px]"
                            size="s"
                          >
                            Yesterday at 5:12 AM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-[28%]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-4 w-4"
                          alt="sort Seven"
                        />
                        <Text
                          className="text-black_900 tracking-[0.14px]"
                          size="md"
                        >
                          5.56 ETH
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-gray_100 w-full" />
                    <div className="flex flex-1 flex-row gap-[23px] items-center justify-between w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-between w-[66%]">
                        <Img
                          src="images/img_icon_gray_50.png"
                          className="h-[42px] md:h-auto object-cover w-[42px]"
                          alt="Icon Two"
                        />
                        <div className="flex flex-col items-start justify-start pt-0.5">
                          <Text
                            className="text-black_900 tracking-[0.16px]"
                            as="h6"
                            size="lg"
                          >
                            Open Bid Success
                          </Text>
                          <Text
                            className="mt-1 text-gray_500 tracking-[0.12px]"
                            size="s"
                          >
                            Yesterday at 3:12 AM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-[27%]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-4 w-4"
                          alt="sort Eight"
                        />
                        <Text
                          className="text-black_900 tracking-[0.14px]"
                          size="md"
                        >
                          2.21 ETH
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-gray_100 w-full" />
                    <div className="flex flex-1 flex-row gap-9 items-center justify-between w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-between w-3/5">
                        <Button
                          className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                          size="mdIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_topup.png"
                            className="h-6"
                            alt="Frame162471 One"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-black_900 tracking-[0.16px]"
                            as="h6"
                            size="lg"
                          >
                            Enefty Top Up
                          </Text>
                          <Text
                            className="mt-1 text-gray_500 tracking-[0.12px]"
                            size="s"
                          >
                            Yesterday at 3:12 AM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-[28%]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-4 w-4"
                          alt="sort Nine"
                        />
                        <Text
                          className="text-black_900 tracking-[0.14px]"
                          size="md"
                        >
                          2.32 ETH
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfileWalletPage;
