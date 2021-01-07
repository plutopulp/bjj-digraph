def camelcase_to_underscore(string):
    """ Converts a camel cased string to underscore format """
    output_str = ""

    def character_check(input_str, output_str):
        if not len(input_str):
            return output_str
        output_str += (
            input_str[0] if input_str[0].islower() else "_" + input_str[0].lower()
        )
        return character_check(input_str[1:], output_str)

    return character_check(string, output_str)
