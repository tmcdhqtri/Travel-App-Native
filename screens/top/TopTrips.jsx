import { FlatList, View } from "react-native";
import React from "react";
import ReusableTile from "../../components/Reusable/ReusableTile";

const TopTrips = ({ navigation }) => {
  const places = [
    {
      _id: "651e823b10b6ac6fd9001b07",
      country_id: "651c47c984c373c3500dbc36",
      imageUrl: "https://vietnamtravel.com/images/2020/07/da-nang-city.jpg",
      location: "Da Nang, Viet Nam",
      title: "Da Nang",
      rating: 4.8,
      review: "1234 Reviews",
    },
    {
      _id: "651e833410b6ac6fd9001b09",
      country_id: "651c47c984c373c3500dbc36",
      imageUrl:
        "https://vir.com.vn/stores/news_dataimages/hung/052020/03/17/in_article/1490p8-ba-ria-vung-tau-gears-towards-more-inclusive-development.jpg",
      location: "Ba Ria - Vung Tau, Viet Nam",
      title: "Ba Ria - Vung Tau",
      rating: 4.6,
      review: "124 Reviews",
    },
    {
      _id: "651e83ec10b6ac6fd9001b0c",
      country_id: "651c47c984c373c3500dbc36",
      imageUrl:
        "https://vcdn1-dulich.vnecdn.net/2022/04/28/VinhHY-4711-1651120272.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=cFTJR6qMO0UCRrJYFJ1QfA",
      location: "Ninh Thuan, Viet Nam",
      title: "Ninh Thuan",
      rating: 4.5,
      review: "223 Reviews",
    },
    {
      _id: "651e84d910b6ac6fd9001b0e",
      country_id: "651c47c984c373c3500dbc36",
      imageUrl:
        "https://img3.thuthuatphanmem.vn/uploads/2019/07/13/hinh-anh-thanh-pho-nha-trang-dep_085939110.jpg",
      location: "Nha Trang, Khanh Hoa, Viet Nam",
      title: "Nha Trang",
      rating: 4.7,
      review: "532 Reviews",
    },
    {
      _id: "651e85f110b6ac6fd9001b10",
      country_id: "651c47c984c373c3500dbc36",
      imageUrl:
        "https://media.vietravel.com/images/NewsPicture/phu-quoc-vietnam.jpg",
      location: "Phu Quoc, Kien Giang, Viet Nam",
      title: "Phu Quoc Island",
      rating: 4.6,
      review: "12214 Reviews",
    },
  ];
  return (
    <View style={{ margin: 20 }}>
      <FlatList
        data={places}
        showVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <ReusableTile
              item={item}
              onPress={() => navigation.navigate("PlaceDetails", item._id)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default TopTrips;
