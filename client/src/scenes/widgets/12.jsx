const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)"); // определение константы при помощи хука
  // ... остальной код
  return (
      <Box>
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined} marginBottom={isNonMobileScreens ? undefined : "2rem"}>
            <UserWidget userId={_id} picturePath={picturePath} isOwnProfile={true} />
            {!isNonMobileScreens && ( // проверка на каком устройстве был открыт сайт
                <Box flexBasis="26%" marginTop="2rem">
                    <FriendListWidget userId={_id} isOwnProfile={true} />
                </Box>

            )}
        </Box>
        // ... остальной код
      </Box>
  );
};

export default HomePage;