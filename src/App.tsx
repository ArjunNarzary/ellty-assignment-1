import { useEffect, useState } from "react"
import Button from "./components/Button"
import Checkbox from "./components/Checkbox"
import { checkboxOptions } from "./types"

const parentPageData: checkboxOptions = {
  id: "parentPage",
  label: "All pages",
  checked: false,
  isDisabled: false,
}

const childPagesData: checkboxOptions[] = [
  { id: "page1", label: "Page 1", checked: false, isDisabled: false },
  { id: "page2", label: "Page 2", checked: false, isDisabled: false },
  { id: "page3", label: "Page 3", checked: false, isDisabled: false },
  { id: "page4", label: "Page 4", checked: false, isDisabled: false },
]

function App() {
  const [parentPage, setParentPage] = useState(parentPageData)
  const [childPages, setChildPages] =
    useState<checkboxOptions[]>(childPagesData)

  useEffect(() => {
    checkForAllCheckChecked()
    // eslint-disable-next-line
  }, [childPages])

  const checkForAllCheckUnchecked = (check: boolean) => {
    setChildPages(
      childPages.map((page) => ({
        ...page,
        checked: page.isDisabled ? page.checked : check,
      }))
    )
  }

  const checkForAllCheckChecked = () => {
    if (childPages.every((page) => page.checked)) {
      setParentPage({ ...parentPage, checked: true })
    } else if (childPages.every((page) => !page.checked)) {
      setParentPage({ ...parentPage, checked: false })
    }
  }

  const handleParentChange = () => {
    checkForAllCheckUnchecked(!parentPage.checked)
    setParentPage({ ...parentPage, checked: !parentPage.checked })
  }
  const handleChildChange = (id: string) => {
    setChildPages((prev) =>
      prev.map((page) => {
        if (page.id === id) {
          return { ...page, checked: !page.checked }
        }
        return page
      })
    )
  }
  return (
    <main className="container">
      <section className="main-section">
        <Checkbox {...parentPage} onChange={handleParentChange} />
        <hr className="divider" />
        {childPages.map((page: checkboxOptions) => (
          <Checkbox key={page.id} {...page} onChange={handleChildChange} />
        ))}
        <hr className="divider" />
        <Button clasNames="button-margin" />
      </section>
    </main>
  )
}

export default App
