import * as React from "react";
import { StyleSheet,TouchableOpacity, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
const Tank2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.p2}>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={styles.groupChild} />
          <View style={[styles.groupItem, styles.groupChildBorder1]} />
          <Text style={[styles.temperature, styles.temperatureTypo]}>
            TEMPERATURE
          </Text>
          <Text style={[styles.oc, styles.ocClr]}>20OC</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
          <View style={styles.groupChild} />
          <View style={[styles.rectangleView, styles.groupChildBorder1]} />
          <Text style={[styles.temperature1, styles.temperatureTypo]}>
            TEMPERATURE
          </Text>
          <Text style={[styles.oc1, styles.ocClr]}>20OC</Text>
        </View>
        <Image
          style={[styles.hgftghvghIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/hgftghvgh8.png")}
        />
        <Image
          style={styles.hgftghvghIcon1}
          contentFit="cover"
          source={require("../assets/hgftghvgh9.png")}
        />
        <Image
          style={styles.hgftghvghIcon2}
          contentFit="cover"
          source={require("../assets/hgftghvgh10.png")}
        />
        <Image
          style={styles.hgftghvghIcon3}
          contentFit="cover"
          source={require("../assets/hgftghvgh11.png")}
        />
        <Image
          style={[styles.hgftghvghIcon4, styles.hgftghvghIconPosition]}
          contentFit="cover"
          source={require("../assets/hgftghvgh12.png")}
        />
        <Image
          style={[styles.hgftghvghIcon5, styles.hgftghvghIconPosition]}
          contentFit="cover"
          source={require("../assets/hgftghvgh13.png")}
        />
        <View style={styles.rectangleContainer}>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <Image
            style={styles.scrollGroup1}
            contentFit="cover"
            source={require("../assets/scroll-group-11.png")}
          />
          <Text style={[styles.t1, styles.t1Typo]}>T- 8</Text>
          <View style={[styles.groupChild3, styles.groupChildBorder]} />
          <Text style={[styles.temperature2, styles.temperatureTypo]}>
            TEMPERATURE
          </Text>
          <Text style={[styles.oc2, styles.ocClr]}>20OC</Text>
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <Image
            style={[styles.scrollGroup11, styles.scrollGroupPosition]}
            contentFit="cover"
            source={require("../assets/scroll-group-11.png")}
          />
          <View style={[styles.groupChild5, styles.groupChildBorder]} />
          <Text style={[styles.temperature3, styles.oc6Typo]}>TEMPERATURE</Text>
          <Text style={[styles.oc3, styles.ocClr]}>20OC</Text>
        </View>
        <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
          <View style={[styles.groupChild6, styles.groupChildLayout]} />
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <Image
            style={[styles.scrollGroup12, styles.scrollGroupPosition]}
            contentFit="cover"
            source={require("../assets/scroll-group-11.png")}
          />
          <View style={[styles.groupChild8, styles.groupChildBorder1]} />
          <View style={[styles.groupChild9, styles.groupChildBorder1]} />
          <Text style={[styles.temperature4, styles.temperatureTypo]}>
            TEMPERATURE
          </Text>
          <Text style={[styles.temperature5, styles.temperatureTypo]}>
            TEMPERATURE
          </Text>
          <Text style={[styles.oc4, styles.ocClr]}>20OC</Text>
          <Text style={[styles.oc5, styles.ocClr]}>20OC</Text>
        </View>
        <Text style={[styles.t4, styles.t1Typo]}>T- 11</Text>
        <Text style={[styles.t6, styles.t6Typo]}>T- 13</Text>
        <Text style={[styles.t7, styles.t6Typo]}>T- 14</Text>
        <Text style={[styles.t2, styles.t2Typo]}>T- 9</Text>
        <Text style={[styles.t3, styles.t2Typo]}>T- 10</Text>
        <Image
          style={styles.hgftghvghIcon6}
          contentFit="cover"
          source={require("../assets/hgftghvgh14.png")}
        />
      </View>
      <Image
        style={[styles.hgftghvghIcon7, styles.hgftghvghIconLayout1]}
        contentFit="cover"
        source={require("../assets/hgftghvgh15.png")}
      />
      <Image
        style={styles.hgftghvghIcon8}
        contentFit="cover"
        source={require("../assets/hgftghvgh16.png")}
      />
      <Image
        style={[styles.hgftghvghIcon9, styles.hgftghvghIconLayout1]}
        contentFit="cover"
        source={require("../assets/hgftghvgh5.png")}
      />
      <Image
        style={styles.hgftghvghIcon10}
        contentFit="cover"
        source={require("../assets/hgftghvgh17.png")}
      />
      <Image
        style={styles.hgftghvghIcon11}
        contentFit="cover"
        source={require("../assets/hgftghvgh18.png")}
      />
      <View style={styles.textBoxPng24070} />
      <Image
        style={[styles.pngtreeBusinessGraphIcon, styles.pngtreeIconLayout]}
        contentFit="cover"
        source={require("../assets/pngtreebusinessgraphiconwhitecirclebuttonpngimage-3659332removebgpreview-1.png")}
      />
      <Image
        style={[styles.pngtreeBusinessGraphIcon1, styles.pngtreeIconLayout]}
        contentFit="cover"
        source={require("../assets/pngtreebusinessgraphiconwhitecirclebuttonpngimage-3659332removebgpreview-1.png")}
      />
      <Image
        style={[styles.pngtreeBusinessGraphIcon2, styles.pngtreeIconLayout]}
        contentFit="cover"
        source={require("../assets/pngtreebusinessgraphiconwhitecirclebuttonpngimage-3659332removebgpreview-1.png")}
      />
      <Image
        style={[styles.pngtreeBusinessGraphIcon3, styles.pngtreeIconPosition]}
        contentFit="cover"
        source={require("../assets/pngtreebusinessgraphiconwhitecirclebuttonpngimage-3659332removebgpreview-1.png")}
      />
      <Image
        style={[styles.pngtreeBusinessGraphIcon4, styles.pngtreeIconPosition]}
        contentFit="cover"
        source={require("../assets/pngtreebusinessgraphiconwhitecirclebuttonpngimage-3659332removebgpreview-1.png")}
      />
      <Image
        style={[styles.pngtreeBusinessGraphIcon5, styles.pngtreeIconPosition]}
        contentFit="cover"
        source={require("../assets/pngtreebusinessgraphiconwhitecirclebuttonpngimage-3659332removebgpreview-1.png")}
      />
      <View style={styles.rectangleParent2}>
        <View style={[styles.groupChild10, styles.groupChildBorder1]} />
        <Text style={[styles.temperature6, styles.temperatureTypo]}>
          TEMPERATURE
        </Text>
        <Text style={[styles.oc6, styles.oc6Typo]}>20OC</Text>
      </View>
      <Text style={[styles.t5, styles.t1Typo]}>T- 12</Text>
      <Image
        style={[styles.pngtreeBusinessGraphIcon6, styles.pngtreeIconLayout]}
        contentFit="cover"
        source={require("../assets/pngtreebusinessgraphiconwhitecirclebuttonpngimage-3659332removebgpreview-1.png")}
      />
      <Image
        style={[styles.download4RemovebgPreviewIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/download--4-removebgpreview-1.png")}
      />
      <Image
        style={[styles.hgftghvghIcon12, styles.hgftghvghIconLayout]}
        contentFit="cover"
        source={require("../assets/hgftghvgh19.png")}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Tank')}>
      <Image
        style={[styles.images1RemovebgPreview1Icon, styles.images1IconLayout]}
        contentFit="cover"
        source={require("../assets/images--1-removebgpreview-1.png")}
      />
      </TouchableOpacity>
      
      <Image
        style={[styles.images1RemovebgPreview1Icon1, styles.images1IconLayout]}
        contentFit="cover"
        source={require("../assets/images--1-removebgpreview-1.png")}
      />
      

      <Image
        style={[styles.hgftghvghIcon13, styles.hgftghvghIconLayout]}
        contentFit="cover"
        source={require("../assets/hgftghvgh.png")}
      />
      <Image
        style={[styles.images1RemovebgPreview1Icon2, styles.images1IconLayout]}
        contentFit="cover"
        source={require("../assets/images1removebgpreview1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 159,
    position: "absolute",
  },
  groupChildBorder1: {
    borderWidth: 1,
    borderColor: Color.colorDimgray_100,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    position: "absolute",
  },
  temperatureTypo: {
    textAlign: "center",
    fontFamily: FontFamily.mulishSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  ocClr: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_mini,
  },
  iconLayout: {
    height: 214,
    position: "absolute",
  },
  hgftghvghIconPosition: {
    height: 92,
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    width: 155,
    borderWidth: 5,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    backgroundColor: Color.colorCornflowerblue,
    borderRadius: Border.br_xl,
    height: 159,
    position: "absolute",
  },
  t1Typo: {
    width: 113,
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.mulishRegular,
    lineHeight: 27,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    position: "absolute",
  },
  groupChildBorder: {
    right: 166,
    borderWidth: 1,
    borderColor: Color.colorDimgray_100,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    position: "absolute",
  },
  scrollGroupPosition: {
    top: 119,
    height: 1,
    width: 155,
    position: "absolute",
  },
  oc6Typo: {
    top: 20,
    textAlign: "center",
    fontFamily: FontFamily.mulishSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  t6Typo: {
    top: 721,
    width: 113,
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.mulishRegular,
    lineHeight: 27,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    position: "absolute",
  },
  t2Typo: {
    top: 381,
    width: 113,
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.mulishRegular,
    lineHeight: 27,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    position: "absolute",
  },
  hgftghvghIconLayout1: {
    height: 117,
    width: 390,
    position: "absolute",
  },
  pngtreeIconLayout: {
    height: 56,
    width: 56,
    left: 324,
    position: "absolute",
  },
  pngtreeIconPosition: {
    left: 104,
    height: 56,
    width: 56,
    position: "absolute",
  },
  hgftghvghIconLayout: {
    height: 108,
    position: "absolute",
  },
  images1IconLayout: {
    height: 90,
    width: 120,
    position: "absolute",
  },
  groupChild: {
    borderWidth: 5,
    borderColor: Color.colorDarkslategray_200,
    borderStyle: "solid",
    backgroundColor: Color.colorCornflowerblue,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    height: 159,
    width: 163,
    position: "absolute",
  },
  groupItem: {
    right: 10,
    left: 10,
    bottom: 95,
    top: 16,
    borderColor: Color.colorDimgray_100,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
  },
  temperature: {
    left: 27,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    top: 17,
    fontFamily: FontFamily.mulishSemiBold,
    fontWeight: "600",
  },
  oc: {
    left: 66,
    top: 41,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.mulishSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleParent: {
    width: 163,
    left: 143,
    height: 159,
    top: 261,
  },
  rectangleView: {
    top: 16,
    right: 10,
    bottom: 95,
    left: 9,
  },
  temperature1: {
    top: 20,
    left: 27,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
  },
  oc1: {
    top: 43,
    left: 64,
    textAlign: "center",
    fontFamily: FontFamily.mulishSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleGroup: {
    top: 432,
    width: 163,
    left: 143,
    height: 159,
  },
  hgftghvghIcon: {
    top: 557,
    left: 303,
    width: 64,
  },
  hgftghvghIcon1: {
    top: 367,
    left: 305,
    width: 59,
    height: 196,
    position: "absolute",
  },
  hgftghvghIcon2: {
    top: 178,
    left: 302,
    width: 70,
    height: 210,
    position: "absolute",
  },
  hgftghvghIcon3: {
    top: 337,
    left: 307,
    width: 57,
    height: 190,
    position: "absolute",
  },
  hgftghvghIcon4: {
    width: 307,
    left: 0,
  },
  hgftghvghIcon5: {
    left: 366,
    width: 308,
  },
  groupChild1: {
    left: 13,
    width: 155,
    top: 0,
  },
  groupChild2: {
    top: 341,
    left: 13,
    width: 155,
  },
  scrollGroup1: {
    top: 114,
    left: 169,
    height: 1,
    width: 155,
    position: "absolute",
  },
  t1: {
    top: 118,
    left: 0,
  },
  groupChild3: {
    top: 16,
    bottom: 437,
    left: 23,
  },
  temperature2: {
    top: 20,
    left: 35,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
  },
  oc2: {
    top: 41,
    left: 75,
    textAlign: "center",
    fontFamily: FontFamily.mulishSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleContainer: {
    top: 91,
    width: 324,
    height: 500,
    left: 354,
    position: "absolute",
  },
  groupChild4: {
    left: 0,
    top: 0,
  },
  scrollGroup11: {
    left: 155,
  },
  groupChild5: {
    top: 16,
    bottom: 95,
    left: 10,
  },
  temperature3: {
    left: 21,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
  },
  oc3: {
    top: 41,
    left: 61,
    textAlign: "center",
    fontFamily: FontFamily.mulishSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupView: {
    left: 367,
    width: 310,
    top: 261,
  },
  groupChild6: {
    left: 220,
    top: 0,
  },
  scrollGroup12: {
    left: 375,
  },
  groupChild8: {
    right: 165,
    left: 230,
    bottom: 99,
    top: 13,
    borderColor: Color.colorDimgray_100,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
  },
  groupChild9: {
    right: 385,
    left: 10,
    bottom: 99,
    top: 13,
    borderColor: Color.colorDimgray_100,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
  },
  temperature4: {
    left: 242,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    top: 17,
    fontFamily: FontFamily.mulishSemiBold,
    fontWeight: "600",
  },
  temperature5: {
    left: 22,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    top: 17,
    fontFamily: FontFamily.mulishSemiBold,
    fontWeight: "600",
  },
  oc4: {
    left: 282,
    top: 38,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.mulishSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  oc5: {
    left: 62,
    top: 38,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.mulishSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleParent1: {
    top: 602,
    left: 147,
    width: 530,
  },
  t4: {
    top: 553,
    left: 137,
  },
  t6: {
    left: 137,
  },
  t7: {
    left: 354,
  },
  t2: {
    left: 137,
  },
  t3: {
    left: 354,
  },
  hgftghvghIcon6: {
    left: 295,
    width: 75,
    height: 204,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    top: -30,
    left: -137,
    width: 677,
    height: 771,
    position: "absolute",
  },
  hgftghvghIcon7: {
    top: 1254,
    left: -99,
  },
  hgftghvghIcon8: {
    top: 1307,
    left: -116,
    width: 444,
    height: 133,
    position: "absolute",
  },
  hgftghvghIcon9: {
    top: 1253,
    left: 349,
  },
  hgftghvghIcon10: {
    top: 1303,
    left: 339,
    width: 440,
    height: 132,
    position: "absolute",
  },
  hgftghvghIcon11: {
    top: 711,
    left: 165,
    width: 67,
    height: 222,
    position: "absolute",
  },
  textBoxPng24070: {
    top: 127,
    left: -199,
    width: 219,
    height: 187,
    position: "absolute",
  },
  pngtreeBusinessGraphIcon: {
    top: 169,
  },
  pngtreeBusinessGraphIcon1: {
    top: 342,
  },
  pngtreeBusinessGraphIcon2: {
    top: 682,
  },
  pngtreeBusinessGraphIcon3: {
    top: 682,
  },
  pngtreeBusinessGraphIcon4: {
    top: 512,
  },
  pngtreeBusinessGraphIcon5: {
    top: 342,
  },
  groupChild10: {
    right: 0,
    bottom: -2,
    left: 0,
    top: -8,
  },
  temperature6: {
    top: -4,
    left: 13,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
  },
  oc6: {
    left: 52,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_mini,
  },
  rectangleParent2: {
    top: 425,
    right: 16,
    bottom: 372,
    left: 239,
    position: "absolute",
  },
  t5: {
    top: 523,
    left: 217,
  },
  pngtreeBusinessGraphIcon6: {
    top: 513,
  },
  download4RemovebgPreviewIcon: {
    top: 8,
    left: -36,
    width: 223,
  },
  hgftghvghIcon12: {
    top: 737,
    left: -152,
    width: 317,
  },
  images1RemovebgPreview1Icon: {
    top: 749,
    left: 38,
  },
  images1RemovebgPreview1Icon1: {
    top: 746,
    left: 273,
    display: "none",
  },
  hgftghvghIcon13: {
    top: 736,
    left: 232,
    width: 158,
  },
  images1RemovebgPreview1Icon2: {
    top: 745,
    left: 243,
  },
  p2: {
    backgroundColor: Color.colorDimgray_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Tank2;
