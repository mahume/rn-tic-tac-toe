import React, {FC} from "react";
import {View} from "../Themed";
import {StyleSheet} from "react-native";
import GridRow from "./GridRow";

const GameBoardGrid: FC = () => {
    return (
        <View>
            <GridRow />
            <GridRow />
            <GridRow />
        </View>
    )
};

const styles = StyleSheet.create({});

export default GameBoardGrid;
