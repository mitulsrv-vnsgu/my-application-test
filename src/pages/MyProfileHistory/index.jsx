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

const MyProfileHistoryPage = () => {
  const table1Data = React.useRef([
    {
      itemList: "From Mindblowonstudio",
      status: "Actived",
      openPrice: "5.62 ETH",
      yourOffer: "2.62 ETH",
      recentOffer: "2.14 ETH",
      timeLeft: "1h 19m",
    },
    {
      itemList: "From Marvin McKinney",
      status: "On Going",
      openPrice: "11.70 ETH",
      yourOffer: "17.84 ETH",
      recentOffer: "11.99 ETH",
      timeLeft: "18h 18m 2s",
    },
    {
      itemList: "From Angelina Cruzz",
      status: "Ended",
      openPrice: "6.48 ETH",
      yourOffer: "14.81 ETH",
      recentOffer: "12.81 ETH",
      timeLeft: "12h 1m 24s",
    },
    {
      itemList: "From Ralphi Arness",
      status: "Ended",
      openPrice: "17.84 ETH",
      yourOffer: "17.99 ETH",
      recentOffer: "17.84 ETH",
      timeLeft: "28h 20m 5s",
    },
    {
      itemList: "From Annette Black",
      status: "On Going",
      openPrice: "8.99 ETH",
      yourOffer: "11.70 ETH",
      recentOffer: "10.22 ETH",
      timeLeft: "17h 6m 3s",
    },
    {
      itemList: "From Jacob Jones",
      status: "Success",
      openPrice: "14.81 ETH",
      yourOffer: "16.48 ETH",
      recentOffer: "12.32 ETH",
      timeLeft: "3h 37m 22s",
    },
    {
      itemList: "From Eleanor Pena",
      status: "On Going",
      openPrice: "5.22 ETH",
      yourOffer: "8.99 ETH",
      recentOffer: "6.70 ETH",
      timeLeft: "34h 36m 6s",
    },
    {
      itemList: "From Brooklyn Simmons",
      status: "On Going",
      openPrice: "3.99 ETH",
      yourOffer: "5.22 ETH",
      recentOffer: "4.84 ETH",
      timeLeft: "3h 4m 3 s",
    },
  ]);
  const navigate = useNavigate();
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("itemList", {
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
            className="min-w-[322px] pb-[25px] sm:pl-5 pl-6 text-gray_500 tracking-[0.14px]"
            size="md"
          >
            Item List
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("status", {
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
            className="min-w-[141px] pb-[25px] text-gray_500 tracking-[0.14px]"
            size="md"
          >
            Status
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("openPrice", {
        cell: (info) => (
          <div className="flex flex-row gap-1.5 items-start justify-center sm:pr-5 pr-[25px] py-[25px]">
            <Img
              src="images/img_sort.svg"
              className="h-4 mt-2.5 w-4"
              alt="sort"
            />
            <Text
              className="mr-[66px] mt-[9px] text-black_900 tracking-[0.14px]"
              size="md"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[170px] pb-6 pt-0.5 text-center text-gray_500 tracking-[0.14px]"
            size="md"
          >
            Open Price
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("yourOffer", {
        cell: (info) => (
          <div className="flex flex-row gap-1.5 items-start justify-start">
            <Img
              src="images/img_sort.svg"
              className="h-4 mt-[34px] w-4"
              alt="sort One"
            />
            <Text
              className="mb-6 mt-[34px] text-black_900 tracking-[0.14px]"
              size="md"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[166px] pb-[26px] text-gray_500 tracking-[0.14px]"
            size="md"
          >
            Your Offer
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("recentOffer", {
        cell: (info) => (
          <div className="flex flex-row gap-1.5 items-start justify-start">
            <Img
              src="images/img_sort.svg"
              className="h-4 mt-[34px] w-4"
              alt="sort Two"
            />
            <Text
              className="mb-6 mt-[34px] text-black_900 tracking-[0.14px]"
              size="md"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[174px] pb-[26px] text-gray_500 tracking-[0.14px]"
            size="md"
          >
            Recent Offer
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("timeLeft", {
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
            className="min-w-[97px] pb-[26px] text-gray_500 tracking-[0.14px]"
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
                <div className="flex flex-col items-start justify-start p-2.5 w-full">
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
                <div className="bg-gray_900_5f flex flex-col font-outfit items-start justify-end p-2 rounded-[10px] w-full">
                  <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] w-[41%] md:w-full">
                    <Img
                      src="images/img_clock_4.svg"
                      className="h-6 w-6"
                      alt="clock Two"
                    />
                    <Text
                      className="mt-0.5 text-gray_900 tracking-[0.18px]"
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
        <div className="flex flex-1 flex-col gap-[39px] items-center justify-end md:px-5 w-full">
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
          <div className="flex flex-col font-urbanist items-start justify-start w-[95%] md:w-full">
            <Text
              className="text-black_900 tracking-[0.34px]"
              as="h2"
              size="5xl"
            >
              History
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[17px] w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[84px]"
                leftIcon={
                  <Img
                    src="images/img_refresh_24x24.svg"
                    className="ml-4 mr-2.5 my-3.5"
                    alt="refresh"
                  />
                }
                shape="CircleBorder14"
                size="lg"
                variant="OutlineGray100"
              >
                <div className="font-medium text-base text-black_900 text-left tracking-[0.16px]">
                  All
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
                className="cursor-pointer flex items-center justify-center min-w-[151px] sm:ml-[0] ml-[497px]"
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
            <div className="overflow-auto bg-white_A700 mt-[30px] outline outline-[0.5px] outline-gray_100 rounded-[15px] shadow-bs1 w-full">
              <ReactTable
                columns={table1Columns}
                data={table1Data.current}
                rowClass={""}
                headerClass="border-b border-gray_100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfileHistoryPage;
