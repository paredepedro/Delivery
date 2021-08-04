import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Home = ({ navigation }) => {

    // Dummy Datas
    //-6.354478, -47.377114
    const initialCurrentLocation = {
        streetName: "Viriato Correia",
        gps: {
            latitude: -6.354478,
            longitude: -47.377114
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Arroz",
            icon: icons.rice_bowl,
        },
        {
            id: 2,
            name: "Sopa",
            icon: icons.noodle,
        },
        {
            id: 3,
            name: "Cachorro Quente",
            icon: icons.hotdog,
        },
        {
            id: 4,
            name: "Saladas",
            icon: icons.salad,
        },
        {
            id: 5,
            name: "Hamburgeres",
            icon: icons.hamburger,
        },
        {
            id: 6,
            name: "Pizza",
            icon: icons.pizza,
        },
        {
            id: 7,
            name: "Lanches",
            icon: icons.fries,
        },
        {
            id: 8,
            name: "Sushi",
            icon: icons.sushi,
        },
        {
            id: 9,
            name: "Sobremesas",
            icon: icons.donut,
        },
        {
            id: 10,
            name: "Bebidas",
            icon: icons.drink,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            //Restaurante Casa De Palha: -6.353582, -47.376726
            id: 1,
            name: "Restaurante Casa De Palha",
            rating: 4.8,
            categories: [5, 7],
            priceRating: affordable,
            photo: images.burger_restaurant_1,
            duration: "30 - 45 min",
            location: {
                latitude: -6.353582,
                longitude: -47.376726,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Ana"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Hamburger de Frango Crocante",
                    photo: images.crispy_chicken_burger,
                    //Hamburger com frango crocante, queijo e alface
                    description: "Hamburger com frango crocante, queijo e alface",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    //Hamburger de Frango Crocante com Mostarda de Mel
                    name: "Hamburger de Frango Crocante com Mostarda de Mel",
                    photo: images.honey_mustard_chicken_burger,
                    description: "Hamburger de Frango Crocante com salada de repolho com mostarda e mel",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    //Batatinha Frinta crocante
                    name: "Batatinha Frita Crocante",
                    photo: images.baked_fries,
                    description: "Batatinha Frita Crocante",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            //Colonial Restaurante: -6.352243, -47.377551
            id: 2,
            name: "Colonial Restaurante",
            rating: 4.8,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: images.pizza_restaurant,
            duration: "15 - 20 min",
            location: {
                latitude: -6.352243,
                longitude: -47.377551,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jonas"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Pizza Havaiana",
                    photo: images.hawaiian_pizza,
                    description: "Bacon canadense, massa de pizza caseira, molho de pizza",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Pizza de Tomate e Manjericão",
                    photo: images.pizza,
                    description: "Tomates frescos, pesto de manjericão aromático e bocconcini derretido",
                    calories: 250,
                    price: 20
                },
                {
                    menuId: 6,
                    name: "Macarrão com Tomates",
                    photo: images.tomato_pasta,
                    description: "Macarrão com tomates frescos",
                    calories: 100,
                    price: 10
                },
                {
                    menuId: 7,
                    name: "Salada Mediterrânea Picada ",
                    photo: images.salad,
                    description: "Alface picada, tomate, pepino",
                    calories: 100,
                    price: 10
                }
            ]
        },
        {
            //Restaurante Da Lú: -6.355855, -47.377195
            id: 3,
            name: "Restaurante Da Lú",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.hot_dog_restaurant,
            duration: "20 - 25 min",
            location: {
                latitude: -6.355855,
                longitude: -47.377195,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Davi"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Cachorro-quente Chicago Style",
                    photo: images.chicago_hot_dog,
                    description: "Tomates frescos, cachorros-quente de carne",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            //Restaurante Do Irmão: -6.355373, -47.377085
            id: 4,
            name: "Restaurante Do Irmão",
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: images.japanese_restaurant,
            duration: "10 - 15 min",
            location: {
                latitude: -6.355373,
                longitude: -47.377085,
            },
            courier: {
                avatar: images.avatar_4,
                name: "João"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Conjuntos de sushi",
                    photo: images.sushi,
                    description: "Salmão fresco, arroz de sushi, abacate fresco",
                    calories: 100,
                    price: 50
                }
            ]
        },
        {
            //Restaurante Da Neguinha: -6.353225, -47.377465
            id: 5,
            name: "Restaurante Da Neguinha",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.noodle_shop,
            duration: "15 - 20 min",
            location: {
                latitude: -6.353225,
                longitude: -47.377465,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Arthur"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Kolo Mee",
                    photo: images.kolo_mee,
                    description: "Macarrão com char siu",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 11,
                    name: "Sarawak Laksa",
                    photo: images.sarawak_laksa,
                    description: "Macarrão de aletria, camarão cozido",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 12,
                    name: "Nasi Lemak",
                    photo: images.nasi_lemak,
                    description: "Um prato tradicional de arroz malaio",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 13,
                    name: "Nasi Briyani com Carneiro",
                    photo: images.nasi_briyani_mutton,
                    description: "Tradicional prato de arroz indiano com carneiro",
                    calories: 300,
                    price: 8
                },

            ]
        },
        {
            //Master Lanches: -6.346090, -47.386287
            id: 6,
            name: "Master Lanches",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.kek_lapis_shop,
            duration: "35 - 40 min",
            location: {
                latitude: -6.346090,
                longitude: -47.386287,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessica"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Teh C Peng",
                    photo: images.teh_c_peng,
                    description: "Três camadas de Teh C Peng",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 13,
                    name: "ABC Ice Kacang",
                    photo: images.ice_kacang,
                    description: "Raspadinha com Feijão Vermelho",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 14,
                    name: "Bolo em Camadas",
                    photo: images.kek_lapis,
                    description: "Bolo em Camadas",
                    calories: 300,
                    price: 20
                }
            ]

        }


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Principais</Text>
                <Text style={{ ...FONTS.h1 }}>Categorias</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;
