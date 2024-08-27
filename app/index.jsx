import { Link, Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";

export default function Index() {
  const { isLoaded, user } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      setLoading(false);
    }
  }, [isLoaded]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user ? <Redirect href={'/(tabs)/home'} /> : <Redirect href={'/login'} />}
    </View>
  );
}
