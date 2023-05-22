import React, { forwardRef } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { H4 } from "~components/texts";
import AppColors from "~utills/AppColors";
import styles from "./styles";
import { Controller } from "react-hook-form";
import { height, width } from "~utills/Dimension";
import { DownArrow } from "~assets/SVG";
import PhoneInput from "react-native-phone-number-input";
import FontFamily from "~utills/FontFamily";
const InputPhone = (
  {
    title,
    onChangeText,
    containerStyle = {},
    textinputViewStyle = {},
    feildName,
    formControl,
    textValue,
    errorMsg,
    containerWidth = 82,
  },
  ref
) => {
  return (
    <>
      <View
        style={[
          styles.container,
          { width: width(containerWidth + 8) },
          containerStyle,
        ]}
      >
        <View
          style={[
            styles.textInputView,
            { width: width(containerWidth) },
            textinputViewStyle,
          ]}
        >
          <H4 color={AppColors.black3}>{title}</H4>
          <View
            style={[
              styles.mainInputContainer,
              { width: width(containerWidth + 8) },
            ]}
          >
            <View style={styles.iconStyle}>
              <DownArrow />
            </View>
            <Controller
              control={formControl}
              name={feildName}
              render={({ field: { onChange, onBlur, value } }) => (
                <PhoneInput
                  layout="first"
                  onChangeFormattedText={onChangeText ? onChangeText : onChange}
                  value={textValue ? textValue : value}
                  withDarkTheme
                  withShadow={false}
                  textContainerStyle={styles.textContainerStyle}
                  containerStyle={styles.containerStyle}
                  textInputStyle={styles.textInputStyle}
                  codeTextStyle={styles.codeTextStyle}
                  countryPickerButtonStyle={styles.countryPickerButtonStyle}
                  countryPickerProps={{
                    withEmoji: false,
                    renderFlagButton: null,
                  }}
                  ref={ref}
                  renderDropdownImage={null}
                  disableArrowIcon
                  textInputProps={{ maxLength: 11 }}
                  placeholder="234 567 890"
                  defaultCode="US"
                />
              )}
            />
          </View>
        </View>
      </View>
      <H4
        color={AppColors.red}
        textStyles={{ width: width(containerWidth + 8) }}
        size={2.5}
      >
        {errorMsg?.message}
      </H4>
    </>
  );
};

export default forwardRef(InputPhone);
