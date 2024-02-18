type templateDataType = {
  id: number,
  name: string,
  subject: string,
  content: string,
  category_id: number,
  category_topic?: number
  attached_file: string | null,
}

type categoryDataType = {
  id: number,
  topic: string
}

type optionType = { id: string | number; value: string }