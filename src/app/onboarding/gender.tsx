import { useState } from 'react';

import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { useRouter } from 'expo-router';

const BLUE = '#258FF5';
const PINK = '#E32491';


function Silhouette({gender} : {gender: 'male'|'female'}) {
const isMale = gender === 'male';

    return (
        <View style={styles.figure}>
            <View style={[
                styles.head,
                isMale ? styles.maleHead : styles.femaleHead,
            ]} />

            {!isMale && <View style={styles.hair} />}

            <View style ={[
                styles.body,
                isMale ? styles.maleBody : styles.femaleBody,
            ]} />

            <View style = {[
                styles.arm,
                styles.leftArm,
                isMale ? styles.maleArm : styles.femaleArm,
            ]}/>

            <View style={[
                styles.arm,
                styles.rightArm,
                isMale ? styles.maleArm : styles.femaleArm,
            ]} />

            {/* Legs */}
            <View style={[
                styles.leg,
                styles.leftLeg,
                isMale ? styles.maleLeg : styles.femaleLeg,
            ]} />

            <View style={[
                styles.leg,
                styles.rightLeg,
                isMale ? styles.maleLeg : styles.femaleLeg,
            ]} />

            {/* Feet */}
            <View style={styles.leftFoot} />
            <View style={styles.rightFoot} />
        </View>
    );
}
export default function GenderScreen() {

    const router = useRouter();

    const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);

    const handleNext = () => {
        if (!selectedGender) return;

        router.push({
            pathname: '/onboarding/focus-area',
            params: {gender: selectedGender}
        })
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' />
            <View style={styles.progressBackground}>
                <View style={styles.progressFill} />
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>
                    what's your gender?
                </Text>

                <Text style={styles.subtitle}>
                    let us know you better
                </Text>
            </View>

            <View style={styles.genderContainer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.genderOption}
                    onPress={()=> setSelectedGender('male')}
                >
                    {selectedGender === 'male' && (
                        <View
                            style ={[
                                styles.highlight,
                                styles.maleHighlight,
                            ]}
                        />
                    )}

                    <Silhouette gender ='male' />
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.genderOption}
                    onPress={()=> setSelectedGender('female')}
                >
                    {selectedGender === 'female' && (
                        <View
                            style ={[
                                styles.highlight,
                                styles.femaleHighlight,
                            ]}
                        />
                    )}

                    <Silhouette gender ='female' />
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={[
                    styles.nextButton,
                    !selectedGender && styles.disabledButton,
                ]}
                disabled={!selectedGender}
                onPress={handleNext}
                activeOpacity={0.8}
            >
                <Text style={styles.nextText}>
                    NEXT
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 25,
        paddingTop: 35,
        paddingBottom: 25,
    },

    progressBackground:{
        height: 12,
        width: '100%',
        backgroundColor: '#DADADA',
        borderRadius: 20,
        overflow: 'hidden'
    },

    progressFill:{
        height: '100%',
        width: '12%',
        backgroundColor: BLUE,
        borderRadius: 20,
    },

    header:{
        alignItems: 'center',
        marginTop: 35,
    },

    title:{
        fontSize: 30,
        fontWeight: '900',
        color: '#111111',
        textAlign: 'center',
    },

    subtitle: {
        fontSize: 19,
        marginTop: 5,
        color: '#222222'
    },

    genderContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
    },

    genderOption: {
        width: '48%',
        height: 330,
        justifyContent: 'center',
        alignItems: 'center',
    },

    highlight: {
        position: 'absolute',
        width: 155,
        height: 210,
        borderRadius: 40,
        transform: [{rotate: '-12deg'}],
    },

    maleHighlight: {
        backgroundColor: BLUE
    },

    femaleHighlight: {
        backgroundColor: PINK
    },

    figure: {
        width: 120,
        height: 285,
        alignItems: 'center',
        position: 'relative',
    },

    head: {
        position: 'absolute',
        top: 0,
        width: 47,
        height: 62,
        backgroundColor: '#111111',
        borderRadius: 25,
        zIndex: 3,
    },

    maleHead: {
        width: 48,
        height: 60,
    },

    femaleHead: {
        width: 49,
        height: 58,
    },

    hair: {
        position: 'absolute',
        top: -5,
        width: 65,
        height: 75,
        backgroundColor: '#111111',
        borderRadius: 30,
        zIndex: 2,
    },

    body: {
        position: 'absolute',
        top: 58,
        backgroundColor: '#111111',
        zIndex: 2,
    },

    maleBody: {
        width: 83,
        height: 115,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    femaleBody: {
        width: 75,
        height: 120,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },

    arm: {
        position: 'absolute',
        top: 70,
        width: 23,
        height: 115,
        backgroundColor: '#111111',
        borderRadius: 20,
        zIndex: 1,
    },

    leftArm: {
        left: 8,
        transform: [{ rotate: '12deg' }],
    },

    rightArm: {
        right: 8,
        transform: [{ rotate: '-12deg' }],
    },

    maleArm: {
        height: 115,
    },

    femaleArm: {
        height: 110,
        width: 18,
    },

    leg: {
        position: 'absolute',
        top: 155,
        width: 34,
        height: 115,
        backgroundColor: '#111111',
        borderRadius: 18,
        zIndex: 2,
    },

    leftLeg: {
        left: 30,
        transform: [{ rotate: '3deg' }],
    },

    rightLeg: {
        right: 30,
        transform: [{ rotate: '-3deg' }],
    },

    maleLeg: {
        width: 37,
    },

    femaleLeg: {
        width: 29,
    },

    leftFoot: {
        position: 'absolute',
        bottom: 0,
        left: 15,
        width: 48,
        height: 15,
        backgroundColor: '#111111',
        borderRadius: 15,
    },

    rightFoot: {
        position: 'absolute',
        bottom: 0,
        right: 15,
        width: 48,
        height: 15,
        backgroundColor: '#111111',
        borderRadius: 15,
    },

    nextButton: {
        width: '100%',
        height: 80,
        backgroundColor: BLUE,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    disabledButton: {
        opacity: 0.45,
    },

    nextText: {
        fontSize: 34,
        fontWeight: '900',
        color: '#FFFFFF',
    },
});