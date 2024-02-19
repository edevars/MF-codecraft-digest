type templateDataType = {
  id: number,
  name: string,
  subject: string,
  content: string,
  category_id: number,
  category_topic?: string
  attached_file: string | null,
}

type categoryDataType = {
  id: number,
  topic: string
}

type newsletterDataType = {
  id?: number,
  name: string,
  template_id: number,
  template_name: string,
  template_topic: string,
  date_sent: string,
  count_sent: number,
}

type optionType = { id: string | number; value: string }